import React from "react";
import { styled } from "styled-components";
import ButtonBanner from "./ButtonBanner";
import appIcon from "../../assets/img/main/appIcon.jpg";
import MainTitle from "./MainTitle";

import apply from "../../assets/img/main/mainInfo_apply.png";
import qna from "../../assets/img/main/mainInfo_qna.png";
import documents from "../../assets/img/main/mainInfo_documents.png";

const MainInfo = () => {
  const data = [
    {
      id: 4,
      title: `[프라임경제]인슈로보, 서비스 리뉴얼 '고객편의확대`,
      date: '2024.04.04',
      content: ``
    },
    {
      id: 3,
      title: `[프라임경제] '인슈로보-요기요, 소상공인 풍수해보험 무료 서비스 개시`,
      date: '2024.04.03',
      content: ``
    },
    {
      id: 2,
      title: `[머니투데이] '7일→5분' 주소만 입력하면 보험 OK…소상공인 인슈어테크 뜬다`,
      date: '2024.04.01',
      content: ``
    },
    {
      id: 1,
      title: `[프라임경제] 소상공인 특화 보험 서비스 출시, 서민 인슈로보 대표`,
      date: '2024.03.08',
      content: ``
    },
  ]

  return (
    <Wrap>
      <div>
        <ButtonBanner
          title='인슈로보 모바일앱 다운로드'
          text='휴대폰에서도 간편하게!'
          img={appIcon}
        />
        <ButtonBanner
          title='대표 상담번호'
          text='평일 09:00 ~ 18:00'
          LargeText='070-4126-3333'
          bgColor='#176FFF'
        />
      </div>
      <div>
        <div>
          <MainTitle
            title='궁금증을 해결해 드릴게요'
            text='상담신청을 통해서 궁금증을 빠르게 해결하세요.'
          />
          <div className="question-wrap">
            <div>
              <h2>인슈 상담신청</h2>
              <div><img src={apply} alt="상담신청"/></div>
            </div>
            <div>
              <h2>자주묻는질문</h2>
              <div><img src={qna} alt="자주묻는질문"/></div>
            </div>
            <div>
              <h2>필요서류안내</h2>
              <div><img src={documents} alt="필요서류안내"/></div>
            </div>
          </div>
        </div>
        <div>
          <div className="notice_title-wrap">
            <MainTitle
              title='공지사항'
              text='인슈로보 주요 정보를 한 눈에!'
            />
            <button>더보기</button>
          </div>
          <div className="notice">
            {data.slice(0, 3).map((dt) => (
              <div>
                <p>{dt.title}</p>
                <span>{dt.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </Wrap>
  )
}

export default MainInfo;

const Wrap = styled.div`
  padding: 80px 0;
  font-family: 'Noto Sans KR', sans-serif;
  > div {
    display: flex;
    justify-content: space-between;
    > div {
      width: 570px;
      > div:first-child {
        padding: 30px 0;
      }
      .notice_title-wrap {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        > button {
          font-size: 18px;
          text-decoration: underline;
        }
      }
      .notice {
        padding: 30px 20px;
        border-radius: 15px;
        box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
        height: 163px;
        > div {
          display: flex;
          justify-content: space-between;
          padding-bottom: 16px;
          > p {
            width: 400px;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            position: relative;
            padding-left: 20px;
          }
          > span {
            color: #B4B4B4;
          }
        }
        > div > p::before {
          position: absolute;
          top: 10px;
          left: 5px;
          content: '';
          width: 4px;
          height: 4px;
          background-color: #545454;
          display: block;
          border-radius: 50%;
        }
      }
      .question-wrap {
        display: flex;
        justify-content: space-between;
        > div {
          padding: 20px 0 10px;
          width: 175px;
          height: 163px;
          border-radius: 15px;
          box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          > h2 {
            font-size: 18px;
            font-weight: 400;
            color: #000000;
          }
          > div {
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

`;
