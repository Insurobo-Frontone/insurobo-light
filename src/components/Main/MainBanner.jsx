import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentInner from "../../layout/ContentInner";
import MainSlider from "../Slider/MainSlider";

import loan from "../../assets/img/main/mainProduct_loan.jpg";
import info from "../../assets/img/main/mainProduct_info.jpg";
import calc from "../../assets/img/main/mainProduct_calc.jpg";

const MainBanner = () => {
  return (
    <ContentInner noneStyle>
      <Wrap>
        <MainSlider />
        <MainProduct>
          <div>
            <Link>
              <h2>소상공인 전용대출</h2>
              <p>
                사장님들을 위하여 준비했습니다!<br />
                지금 당장 확인해보세요.
              </p>
            </Link>
          </div>
          <div>
            <Link>
              <h2>지원사업정보</h2>
              <p>
                소상공인을 위한<br />
                맞춤 정보 공간
              </p>
            </Link>
            <Link>
              <h2>간편보험계산</h2>
              <p>
                매우 간단하게<br />
                보험료 계산해보세요.
              </p>
            </Link>
          </div>
        </MainProduct>
      </Wrap>
    </ContentInner>
  )
}

export default MainBanner;

const Wrap = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  font-family: 'Noto Sans KR', sans-serif;
  ${(props) => props.theme.window.mobile} {
    display: block;
  }
`;

const MainProduct = styled.div`
  width: 485px;
  display: flex;
  align-content: space-between;
  flex-flow: row wrap;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > a {
      display: block;
      border-radius: 15px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
      background-repeat: no-repeat;
      > h2 {
        font-size: 20px;
        line-height: 30px;
        padding-bottom: 3px;
      }
      > p {
        font-size: 14px;
      }
    }
  }
  > div:first-child {
    > a {
      width: 485px;
      height: 172px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-image: url(${loan});
      background-position: right;
    }
  }
  > div:last-child {
    > a {
      width: 235px;
      height: 179px;
      padding: 20px;
      background-image: url(${calc});
    }
  }
  > div:last-child > a:first-child {
    text-align: end;
    background-image: url(${info});
    background-position: 13px calc(100% - -5.7px);
  }
  > div:last-child > a:last-child {
    background-image: url(${calc});
    background-position: calc(100% - -20px) calc(100% - -18px);
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      padding: 0 24px;
    }
  }
`;



