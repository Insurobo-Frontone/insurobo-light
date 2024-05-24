import React, { useState } from "react";
import InnerBox from "../../InnerBox";
import { styled } from "styled-components";

const History = () => {
  const [openTab, setOpenTab] = useState(1);
  const years = [
    {
      id: 1,
      year: 2023,
      content: `
        <div class="tab-con" id="history2023">
          <dl class="list-history">
            <dt>02</dt>
            <dd>
              <ul class="list-dot">
                <li>강릉원주대학교 프로젝트랩 지원사업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>04</dt>
            <dd>
              <ul class="list-dot">
                <li>롯데카드 LOCA앱 제휴 계약체결</li>
                <li>창업도약패키지 지원사업 선정</li>
                <li>마이데이터 종합기반 조성사업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>05</dt>
            <dd>
              <ul class="list-dot">
                <li>인천 관광·MICE 스타트업 지원사업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>06</dt>
            <dd>
              <ul class="list-dot">
                <li>지역지능화 혁신인재 양성사업 선정</li>
                <li>전략적 투자유치 / 14억(누적투자 30.5억)</li>
                <li>에스앤피랩 MOU체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>08</dt>
            <dd>
              <ul class="list-dot">
                <li>사고링크 MOU체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>09</dt>
            <dd>
              <ul class="list-dot">
                <li>㈜뱅큐 MOU체결</li>
              </ul>
            </dd>
          </dl>
        </div>
      `
    },
    {
      id: 2,
      year: 2022,
      content: `
        <div class="tab-con" id="history2022">
          <dl class="list-history">
            <dt>03</dt>
            <dd>
              <ul class="list-dot">
                <li>신한금융 인큐베이션 8기 협력스타트업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>04</dt>
            <dd>
              <ul class="list-dot">
                <li>야놀자 가맹점대상 풍수해보험 시범사업 계약체결</li>
                <li>SK증권 &amp; 스타벤처스 스타이노베이션 1기 혁신스타트업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>05</dt>
            <dd>
              <ul class="list-dot">
                <li>전략적 투자유치 / 2억 (누적투자 6.5억)</li>
                <li>초기창업패키지 혁신 스타트업 선정</li>
                <li>한국관광공사 혁신 스타트업 선정 (데이터 활용 사업)</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>06</dt>
            <dd>
              <ul class="list-dot">
                <li>프렌트립 가맹점 대상 소상공인보험 시범사업 계약체결</li>
                <li>BC카드 가맹점 대상 소상공인보험 시범사업 계약체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>08</dt>
            <dd>
              <ul class="list-dot">
                <li>K뱅크 소상공인 대상 소상공인보험 시범사업 계약체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>10</dt>
            <dd>
              <ul class="list-dot">
                <li>롯데카드 가맹점 대상 소상공인보험 시범사업 계약체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>12</dt>
            <dd>
              <ul class="list-dot">
                <li>전략적 투자유치 / 10억 (누적투자 16.5억)</li>
              </ul>
            </dd>
          </dl>
        </div>
      `
    },
    {
      id: 3,
      year: 2021,
      content: `
        <div class="tab-con none" id="history2022">
          <dl class="list-history">
            <dt>03</dt>
            <dd>
              <ul class="list-dot">
                <li>신한금융 인큐베이션 8기 협력스타트업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>04</dt>
            <dd>
              <ul class="list-dot">
                <li>야놀자 가맹점대상 풍수해보험 시범사업 계약체결</li>
                <li>SK증권 &amp; 스타벤처스 스타이노베이션 1기 혁신스타트업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>05</dt>
            <dd>
              <ul class="list-dot">
                <li>전략적 투자유치 / 2억 (누적투자 6.5억)</li>
                <li>초기창업패키지 혁신 스타트업 선정</li>
                <li>한국관광공사 혁신 스타트업 선정 (데이터 활용 사업)</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>06</dt>
            <dd>
              <ul class="list-dot">
                <li>프렌트립 가맹점 대상 소상공인보험 시범사업 계약체결</li>
                <li>BC카드 가맹점 대상 소상공인보험 시범사업 계약체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>08</dt>
            <dd>
              <ul class="list-dot">
                <li>K뱅크 소상공인 대상 소상공인보험 시범사업 계약체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>10</dt>
            <dd>
              <ul class="list-dot">
                <li>롯데카드 가맹점 대상 소상공인보험 시범사업 계약체결</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>12</dt>
            <dd>
              <ul class="list-dot">
                <li>전략적 투자유치 / 10억 (누적투자 16.5억)</li>
              </ul>
            </dd>
          </dl>
        </div>
      `
    },
    {
      id: 4,
      year: 2020,
      content: `
        <div class="tab-con" id="history2020">
          <dl class="list-history">
          <dt>03</dt>
          <dd>
            <ul class="list-dot">
              <li>인슈로보 APP 1.1 출시(prototype)</li>
            </ul>
          </dd>
        </dl>
        <dl class="list-history">
          <dt>06</dt>
          <dd>
            <ul class="list-dot">
              <li>BNK캐피탈 전략적 투자 유치(기업가치 15억)</li>
              <li>티맥스 그룹 전략적 업무협약(MOU)체결 「AI/BI기반 인슈어테크 플랫폼 기술 및 마케팅 협업」</li>
            </ul>
          </dd>
        </dl>
        <dl class="list-history">
          <dt>08</dt>
          <dd>
            <ul class="list-dot">
              <li>기업부설연구소 설립·인증 획득</li>
            </ul>
          </dd>
        </dl>
        <dl class="list-history">
          <dt>09</dt>
          <dd>
            <ul class="list-dot">
              <li>롯데손해보험, 현대BS&amp;C, 티맥스그룹, 에이치닥 전략적 MOU 체결</li>
              <li>「차세대 인슈어테크 플랫폼 공동개발 및 상용화 협업」</li>
            </ul>
          </dd>
        </dl>
        <dl class="list-history">
          <dt>10</dt>
          <dd>
            <ul class="list-dot">
              <li>부산시&amp;하나카드 핀테크 챌린지 우수상 (현대페이 컨소시엄 구축)</li>
              <li>신용보증기금 ‘혁신스타트업’ 선정</li>
            </ul>
          </dd>
        </dl>
        <dl class="list-history">
          <dt>12</dt>
          <dd>
            <ul class="list-dot">
              <li>교보 K 라이프 2020우수 스타트업 최종선발 (투자 및 협업진행)</li>
            </ul>
          </dd>
        </dl>             
      </div>
    `
    },
    {
      id: 5,
      year: 2019,
      content: `
        <div class="tab-con" id="history2019">
          <dl class="list-history">
            <dt>05</dt>
            <dd>
              <ul class="list-dot">
                <li>법인 설립</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>07</dt>
            <dd>
              <ul class="list-dot">
                <li>BNK핀테크랩 1기 스타트업 선정</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>08</dt>
            <dd>
              <ul class="list-dot">
                <li>현대 BS&amp;C 개발 협업</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>10</dt>
            <dd>
              <ul class="list-dot">
                <li>BNK금융지주 전략적 MOU 체결 「인슈어테크플랫폼 구축 전략적 협업」</li>
              </ul>
            </dd>
          </dl>
          <dl class="list-history">
            <dt>12</dt>
            <dd>
              <ul class="list-dot">
                <li>벤처기업 인증</li>
              </ul>
            </dd>
          </dl>
        </div>
      `
    },
  ]
  return (
    <InnerBox>
      <Text>작은 변화를 모아 혁신을 이루어내기 위한 인슈로보의 여정</Text>
      <TabContentWrap>
        <TabMenu>
          {years.map((dt) => (
            <li className={openTab === dt.id ? 'selected': ''}>
              <button onClick={() => setOpenTab(dt.id)}>{dt.year}</button>
            </li>
          ))}
        </TabMenu>
        <div dangerouslySetInnerHTML={years.filter((dt) => dt.id === openTab).map((result) => result.content)}/>
          
      </TabContentWrap>
    </InnerBox>
  )
}
export default History;

const Text = styled.p`
  margin: 40px 0 60px;
  font-size: 24px;
  color: #212529;
  line-height: 1.33;
  text-align: center;
  font-weight: 400;
`;

const TabContentWrap = styled.div``;

const TabMenu = styled.ul`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  height: 24px;
  > li {
    margin-left: 20px;
    padding-left: 20px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 10px;
      margin-top: -5px;
      background-color:#ced4da;
    }
    > button {
      font-size: 18px;
      line-height: 1.33;
      color: #868e96;
    }
    &.selected {
      > button {
        color: #212529;
        font-weight: 700;
      }
    }
    &:first-child {
      margin-left: 0;
      padding-left: 0;
      &::after {
        content: none;
      }
    }
  }
  
`;

const TabContent = styled.div``;


