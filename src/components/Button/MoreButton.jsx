import React from "react";
import more from '../../assets/icon/common/icon-btn_more.png';
import styled from "styled-components";

const MoreButton = () => {
  return (
    <ButtonWrap>
      <button><span />더보기</button>
    </ButtonWrap>
  )
}
export default MoreButton;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  > button {
    width: 120px;
    padding: 0 10px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    background-color: #f1f3f5;
    color: #212529;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    > span {
      width: 16px;
      height: 100%;
      margin-right: 8px;
      display: inline-block;
      background-image: url(${more});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
  
`;
