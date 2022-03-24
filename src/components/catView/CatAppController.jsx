import React, { useEffect, useState } from "react";
import CheckBoxMenu from "./CheckBoxMenu";
import CatApp from "./CatApp";
import styled from "styled-components";
// import catStore from "../store/CatStore";

const CatContainer = styled.div`
  max-width: 300px;
  background-color: white;
  box-shadow: 4px 4px 8px 5px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  padding: 5px;
`;

const GetCatButton = styled.button`
  width: 100%;
  background: transparent;
  border: 1px solid gray;
  color: black;
  padding: 1em;
  margin-top: 15px;
  margin-bottom: 20px;
  &:hover {
    background-color: rgb(174, 192, 216);
  }
  &:active {
    background-color: gray;
  }
`;
const BottonText = styled.span``;

const CatAppController = () => {
  const [enableCheck, isEnableCheck] = useState(true);
  const [autoRefreshCheck, isAutoRefreshCheck] = useState(false);
  const [fetchError, isFetchError] = useState(false);
  const [errorMassage, setErrorMassage] = useState({});
  const [catFetchRes, setCatFetchRes] = useState({});

  const CatLoader = () => {
    isFetchError(false);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        if (!res.ok) {
          isFetchError(true);
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .catch((err) => {
        setErrorMassage(err);
      })
      .then((res) => {
        if (res !== undefined) {
          setCatFetchRes(res[0].url);
        }
      });
  };

  useEffect(() => {
    if (enableCheck === true) {
      CatLoader();
    }
  }, [enableCheck]);

  useEffect(() => {
    if (autoRefreshCheck === true && enableCheck === true) {
      var autoRefresh = setInterval(() => CatLoader(), 5000);
    }
    return () => {
      clearInterval(autoRefresh);
    };
  }, [autoRefreshCheck, enableCheck]);

  useEffect(() => {
    if (enableCheck === false) {
      setCatFetchRes({});
    }
  }, [enableCheck]);

  const GetCatButtonClick = (e) => {
    CatLoader();
  };

  return (
    <CatContainer>
      <CheckBoxMenu
        enableCheck={enableCheck}
        isEnableCheck={isEnableCheck}
        autoRefreshCheck={autoRefreshCheck}
        isAutoRefreshCheck={isAutoRefreshCheck}
      />
      <GetCatButton onClick={GetCatButtonClick}>
        <BottonText>Get Cat</BottonText>
      </GetCatButton>
      {fetchError === true ? (
        <span>{errorMassage.message}</span>
      ) : (
        <CatApp imgUrl={catFetchRes} />
      )}
    </CatContainer>
  );
}

export default CatAppController;
