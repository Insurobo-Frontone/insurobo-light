import React from "react";
import { styled } from "styled-components";

const CommonButton = ({ title, onClick}) => {
  return (
    <ButtonStyle onClick={onClick}>
      {title}
    </ButtonStyle>
  )   
}
export default CommonButton;

const ButtonStyle = styled.button`
  min-width: 260px;
  height: 56px;
  border-radius: 8px;
  margin-top: 30px;
  font-size: 20px;
  color: #FFFFFF;
  background-color: #2ea5ff;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
`;

