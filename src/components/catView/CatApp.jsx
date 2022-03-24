
import styled from "styled-components";
import React from "react";
const CatImage = styled.img`
  max-height: 300px;
  width: 100%;
`;

const CatApp = (props) => {
  return (
    <div>
      <CatImage alt="" src={props.imgUrl}></CatImage>
    </div>
  )
}

export default CatApp
