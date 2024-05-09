import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonBanner = ({
  title, 
  text, 
  img, 
  LargeText,
  label,
  bgImg
}) => {
  const navigate = useNavigate();

  function goPage(link) {
    navigate(link);
  }

  return (
    <Wrap bgImg={bgImg} onClick={() => goPage('/')}>
      <div>
        <h2>{title}{label && <Label>{label}</Label>}</h2>
        <p>{text}</p>
      </div>
      <div>
        {img && (<img src={img} alt="icon" />)}
        {LargeText && (<p>{LargeText}</p>)}
      </div>
      
    </Wrap>
  )
}
export default ButtonBanner;

const Wrap = styled.div`
  margin: 50px 0 80px;
  width: 100%;
  height: 147px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.bgImg && css`
    background-image: url(${props.bgImg});
    background-repeat: no-repeat;
    background-position: calc(100% - 16px) 16px;
  `}
  > div {
    > h2 {
      font-size: 24px;
      display: flex;
      align-items: center;
      padding-bottom: 6px;
    }
    > p {
      font-size: 18px;
    }
  }
`;

const Label = styled.div`
  width: 56px;
  height: 27px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  text-align: center;
  line-height: 27px;
  background-color: #FF4117;
  color: #FFFFFF;
  margin-left: 10px;
`;
