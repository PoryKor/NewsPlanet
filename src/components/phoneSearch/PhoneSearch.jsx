import React from 'react';
import styled from "styled-components";

const PhoneBox = styled.div`
  max-height: 300px;
  width: 100%;
`;

const PhoneInput = styled.input`
  max-height: 300px;
  width: 100%;
`;

const PhoneSearch = () => {
    return <PhoneBox>
        <PhoneInput></PhoneInput>
    </PhoneBox>;
};

export default PhoneSearch;
