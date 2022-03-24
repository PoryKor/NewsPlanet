import styled from "styled-components";
import checkMark from "../../img/check-mark.svg";
import React from "react";

const CheckBoxContainer = styled.div`
  display: grid;
`;
const Icon = styled.img``;
const CheckInput = styled.div`
  margin-top: 2px;
  background: #e2e2e2;
  width: 10px;
  height: 10px;
  border-radius: 4px;
  border: 1px gray solid;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const LabelBox = styled.label`
  margin: 10px;
  display: flex;
`;
const LabelText = styled.span`
  margin-left: 4px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckBox = (props) => {
  return (
    <CheckBoxContainer>
      <LabelBox>
        <HiddenCheckbox checked={props.checked} onChange={props.onChange} />
        <CheckInput
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        >
          <Icon alt="checkMark" src={checkMark}></Icon>
        </CheckInput>
        <LabelText>{props.name}</LabelText>
      </LabelBox>
    </CheckBoxContainer>
  );
};

export default CheckBox;
