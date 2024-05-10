import React from "react";
import styled from "styled-components";
import ContentInner from "../ContentInner";
import logo from "../../assets/img/common/mainLogo.jpg";

const Footer = () => {
  return (
    <Wrap>
      <ContentInner>
        <Fnb>
          <li>회사소개</li>
          <li>개인정보처리방침</li>
          <li>이용약관</li>
        </Fnb>
        <ul>
          <li>(주)인슈로보 서울특별시 강남구 논현로 75길 10, 영창빌딩 4층</li>
          <li>사업자등록번호 690-87-01268</li>
          <li>대표자:서 민 대표번호: 070-4126-3333 메일:info@insurobo.com</li>
        </ul>
        <div>
          ㈜인슈로보(이하 ‘회사’라 한다.)는 인슈로보 앱 서비스(이하 ‘서비스’라 한다.)를 제공함에 있어 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 “정보통신망법”이라 한다.), 개인정보보호법, 인용정보 이용 및 보호에 관한<br />
          법률 등 개인정보 보호 법령을 철저히 준수하면 관련 법규에 의거한 개인정보취급방침을 다음과 같이 두고 있습니다. 회사는 개인정보취급방침을 개정하는 경우 회사가 운영하는 사이트(이하 “사이트”라 한다.) 혹은 서비스의 공지사항<br />
          (또는 개별공지)를 통해 공지할 것입니다. 
        </div>
        <CopyRight>
          <Logo />
          <p>⒞ INSUROBO All Rights Reserved.</p>
        </CopyRight>
      </ContentInner>
    </Wrap>
  )
}
export default Footer;

const Wrap =  styled.div`
  padding: 30px 0;
  border-top: 1px solid #F0F0F0;
  div, li {
    font-size: 12px;
    font-weight: 400;
    color: #2D2D2D;
  }
  ul {
    padding-bottom: 20px;
  }
`;

const Fnb = styled.ul`
  display: flex;
  padding-bottom: 20px;
  > li {
    font-size: 14px;
    font-weight: 700;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 170px;
  height: 51px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0 30px;
  > div {
    margin-right: 20px;
  }
  > p {
    font-size: 14px;
    font-weight: 400;
    color: #2D2D2D;
  }
`;