import React from "react";
import { styled } from "styled-components";
import PageTitle from "../Common/PageTitle";

import title from "../../assets/img/content/finance_card.png";
import card1 from "../../assets/img/content/finance_card_hi.png";
import card2 from "../../assets/img/content/finance_card_simple.png";
import CommonButton from "../Button/CommonButton";


const SmallbizCard = () => {
  return (
    <>
      <PageTitle title='소상공인 신용카드'/>
      <Wrap>
        <JehuTitle>INSUROBO X 신한카드</JehuTitle>
        <ContentInner>
          <BoxWrap>
            <ShadowBox>
              <p>신한카드 Hi-Point MyShop</p>
              <img src={card1} alt="신한카드 Hi-Point MyShop 카드 이미지" />
              <dl>
                <dt>연회비</dt>
                <dd>국내전용 1만원</dd>
                <dd>해외겸용 1만 5천원</dd>
              </dl>
              <div className="card-detail">
                <p>
                  사업성경비P <strong>1~5% 적립</strong>
                </p>
                <p>
                  주유소 포인트 <strong>60P/ℓ 적립</strong>
                </p>
                <p>
                  카드론/현금서비스 <strong>이자율 우대</strong>
                </p>
              </div>
              <div>
                <CommonButton title='카드 신청하기' />
              </div>
            </ShadowBox>
            <ShadowBox>
              <p>신한카드 Simple Platinum#</p>
              <img src={card2} alt="신한카드 Simple Platinum# 카드 이미지" />
              <dl>
                <dt>연회비</dt>
                <dd>국내전용 2만 7천원</dd>
                <dd>해외겸용 3만원</dd>
              </dl>
              <div className="card-detail">
                <p>
                  국내외 가맹점 <strong>1% 캐시백</strong>
                </p>
                <p>
                  대중교통 <strong>추가 0.7% 캐시백</strong>
                </p>
                <p>
                  잔돈할인 <strong>월 10회</strong>
                </p>
              </div>
              <div>
                <CommonButton title='카드 신청하기' />
              </div>
            </ShadowBox>
          </BoxWrap>
          <p>준법감시 심의필 제20230803-Cpi-010호(2023.08.03~2024.08.02)</p>
        </ContentInner>
      </Wrap>
    </>
  )
}

export default SmallbizCard;

const Wrap = styled.div`
  padding: 40px;
  font-family: "Pretendard Variable";
  background-color: #f8f9fa;
`;

const ContentInner = styled.div`
  padding: 40px 0;
  margin: 0 auto;
  width: 1180px;
  > p {
    margin-top: 30px;
    font-size: 18px;
    color: #adb5bd;
    font-weight: 400;
  }
`;

const JehuTitle = styled.div`
  height: 45px;
  margin-bottom: 40px;
  font-size: 0;
  background-size: contain;
  background-position: center;
  background-image: url(${title});
  background-repeat: no-repeat;
`;

const BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShadowBox = styled.div`
  width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #FFFFFF;
  padding: 40px;
  > p {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
    color: #212529;
  }
  > img {
    width: 280px;
  }
  > dl {
    width: 231px;
    display: inline-block;
    margin: 20px auto;
    position: relative;
    padding-left: 92px;
    > dd {
      color: #212529;
      font-size: 18px;
    }
    > dt {
      position: absolute;
      left: 0;
      top: 0;
      font-weight: bold;
      line-height: 1.33;
      color: #212529;
      font-size: 18px;
    }
  }
  .card-detail {
    width: 100%;
    text-align: center;
    padding: 20px 0 40px;
    border-top: 1px solid #f1f3f5;
    line-height: 1.33;
    > p {
      color: #212529;
      font-size: 18px;
      > strong {
        font-weight: 700;
        color: #384cff;
      }
    }
  }
`;
