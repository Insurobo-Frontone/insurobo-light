import React from "react";
import styled from "styled-components";
import Slider from ".";

const InfoSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 767.98,
    //     settings: {
    //       vertical: true,
    //       verticalSwiping: true,
    //       autoplay: false,
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     }
    //   },
    // ]
  }
  const data = [
    {
      id: 5,
      date: '2024-05-04',
      title: `(2024) 초격차 팹리스 챌린지 창업기업 모집공고`,
      content: `
        중소벤처기업부 공고 제2024-270호

        「2024년 팹리스 챌린지 대회 」참여기업 모집공고
        
        '초격차 스타트업 1000+ 프로젝트' 일환으로 시스템반도체 분야 설계 전문기업의 혁신성장을 지원하는 「팹리스 챌린지 대회」계획을 다음과 같이 공고합니다.
        
        2024년 04월 23일
        중소벤처기업부 장관

      `,
    },
    {
      id: 4,
      date: '2024-04-04',
      title: `2024년 로컬브랜드 창출팀 모집공고`,
      content: `
        중소벤처기업부 공고 제2024 - 236호


        2024년 로컬브랜드 창출팀 모집공고
        
        
        지역 고유의 특성과 자원을 기반으로 혁신적인 아이디어를 접목하여지역사회의 자생적 창조역량 강화를 위한 "2024년 로컬브랜드 창출팀"을다음과같이모집합니다.
        
        
        2024년4월4일
        
        중소벤처기업부 장관
        
        
        * 자세한 공고는 공고문 확인바랍니다.
        
        
        
        
        
        해당 공고는 「소상공인24」신청ㆍ접수가 아닌『이메일접수』임을 안내드립니다.
      `,
    },
    {
      id: 3,
      date: '2024-03-04',
      title: `(전북)'전주 에코시티 더샵 4차' 중소기업 장기근속자 주택특별공급 기관추천 대상자 모집`,
      content: `
          ㅇ신청기간 : '24.5.1.(수) ~ 5.14.(화) 18:00
          ﻿
          ㅇ 세대수: 총 42세대 (확정 7세대+ 예비 35세대)
      `,
    },
    {
      id: 2,
      date: '2024-02-04',
      title: '2024년 중소기업 연구인력지원사업(파견) 5월 공고',
      content: `
        신청기업은온라인 접수 시,반드시 파견연구인력과 매칭하여 신청하여야 함


        *(매칭방법)https://smtech.go.kr/region/rpms/main/main.do접속→연구인력수요기업 클릭→사업자등록번호 입력→공동인증서(구.공인인증서) 인증→지원수요등록→주관연구개발기관 승인→파견연구기관검토 및 매칭(파견연구기관에서 검토 후 개별연락)
        
        
        중소벤처기업부 공고 - 제2024-98호
        
        2024년도중소기업 연구인력지원사업 시행계획 공고
        
        
        「2024년중소기업 연구인력지원사업 시행계획」을 다음과 같이 공고하오니, 동 사업에 참여하고자 하는 중소기업은 사업 안내에 따라 신청하시기 바랍니다.
        
        
        2024년 2월 5일
        
        중소벤처기업부장관

      `,
    },
    {
      id: 1,
      date: '2024-01-04',
      title: '2024년 역량단계별 수출지원사업 모집공고',
      content: `

        2024년 역량단계별 수출지원사업 모집공고


        소공인 및 소상공인협동조합의 해외 판로개척을 돕기 위한「2024년 역량단계별 수출지원사업」을 다음과 같이 공고합니다.
        
        
        2024년4월 29일
        
        중소벤처기업부장관·소상공인시장진흥공단이사장

      `,
    }
  ]
  
  return (
    <Slider
      width='1920px'
      height='264px'
      settings={settings}
      noneStyle
    >
      {data.map((dt) => (
        <Card key={dt.id}>
          <TitleWrap>
            <h2>{dt.title}</h2>
            <Label 
              label={dt.id === 3 ? 'NEW' : 'HOT'}
            >{dt.id === 3 ? 'NEW' : 'HOT'}</Label>
          </TitleWrap>
          <ContentWrap>
            <div dangerouslySetInnerHTML={{__html: dt.content}}></div>
          </ContentWrap>
        </Card>
      ))}
    </Slider>
  )
}

export default InfoSlider;

const Card = styled.div`
  width: 383px;
  height: 194px;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 4px 6px 10px 0px rgba(0, 0, 0, 0.10);
  background-color: #FFFFFF;
  margin-right: 20px;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > h2 {
    width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 18px;
    font-weight: 300;
  }
`;
const Label = styled.div`
  width: 49px;
  height: 27px;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 23px;
  color:  ${props => props.label === 'HOT' ? ` #FF4117` : `#0061FF`};
  background-color: ${props => props.label === 'HOT' ? ` rgba(255, 65, 23, 0.28)` : `rgba(0, 97, 255, 0.20)`};
`;
const ContentWrap = styled.div`
  width: 343px;
  margin-top: 20px;
  > div {
    color: #ADADAD;
    font-size: 16px;
    width: 320px;
    height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
