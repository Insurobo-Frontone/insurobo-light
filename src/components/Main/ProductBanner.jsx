import React from "react";
import MainTitle from "./MainTitle";
import { styled } from "styled-components";
import img1 from "../../assets/img/main/productBanner_duty.png";
import img2 from "../../assets/img/main/productBanner_must.png";
import img3 from "../../assets/img/main/productBanner_invest.png";

const ProductBanner = () => {
  return (
    <Wrap>
      <MainTitle
        title='소상공인 지원사업'
        text='다양한 보험을 직접 확인하고 비교해보세요!'
        label='Go!'
      />
      <ul>
        <li>
          <Overlay />
          <h2>
            업종별 의무보험<br />
            <b>꼭!</b>챙기세요
          </h2>
          <p>의무보험</p>

        </li>
        <li>
          <Overlay />
          <h2>
            사업장 <b>안전!</b><br />
            선택이 아닌 <b>필수</b>
          </h2>
          <p>필수보험</p>
        </li>
        <li>
          <Overlay />
          <h2>
            저축과 <b>위험보장</b>을<br />
            동시에!
          </h2>
          <p>재테크보험</p>
        </li>
      </ul>
    </Wrap>
  )
}
export default ProductBanner;

const Wrap = styled.div`
  > ul {
    display: flex;
    justify-content: space-between;
    padding: 34px 0 80px;
    > li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      width: 373px;
      height: 326px;
      padding: 24px;
      border-radius: 15px;
      overflow: hidden;
      background-repeat: no-repeat;
      background-position: center;
      z-index: -2;
      > h2 {
        color: #FFFFFF;
        font-size: 23px;
        font-weight: 300;
        > b {
          color: #FFFFFF;
          font-weight: 700;
        }
      }
      > p {
        color: #FFFFFF;
        font-size: 30px;
        font-weight: 700;
        align-self: flex-end;
      }
    }
    > li:first-child {
      background-image: url(${img1});
     
    }
    > li:nth-child(2) {
      background-image: url(${img2});

    }
    > li:last-child {
      background-image: url(${img3});
      background-position: -98px 0;

    }
  } 
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.58);
  position: absolute;
  inset: 0;
  z-index: -1;
`;

