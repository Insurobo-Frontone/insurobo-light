import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/common/mainLogo.jpg";
import ContentInner from "../ContentInner";

const Header = () => {
  const navigate = useNavigate();
  function goPage(link) {
    navigate(link);
  }
  return (
    <Wrap>
      <ContentInner>
        <Logo onClick={() => goPage('/')} />
        <Gnb>
          <Menu>
            <li>
              금융
                <ul>
                  <li>
                    인슈로보 보험 전체보기
                  </li>
                  <li onClick={() => goPage('/finance/smallbizLoan')}>소상공인 전용대출</li>
                  <li onClick={() => goPage('/finance/smallbizCard')}>소상공인 전용카드</li>
                  <li onClick={() => goPage('/finance/stealthBankbook')}>광주은행 WA뱅크 스텔스통장</li>
                </ul>
            </li>
            <li>
              혜택
                <ul>
                  <li>소상공인 지원사업</li>
                  <li>소상공인 세금환급</li>
                  <li>시민안전보험</li>
                  <li>이벤트</li>
                </ul>
            </li>
            <li>
                고객지원
                <ul>
                  <li>공지사항</li>
                  <li>자주묻는질문</li>
                  <li>상담신청</li>
                  <li>모바일 서비스안내</li>
                </ul>
            </li>
            <li>
              회사소개
                <ul>
                  <li>소개</li>
                  <li>인재상</li>
                  <li>인사제도</li>
                  <li>채용공고</li>
                </ul>
            </li>
          </Menu>
          <User>
            <li onClick={() => goPage('/')}>
              로그인
            </li>
            <li onClick={() => goPage('/')}>
              회원가입
            </li>
          </User>
        </Gnb>
      </ContentInner>
    </Wrap>
  )
}

export default Header;

const Wrap = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  border-bottom: 1px solid #F0F0F0;
  div, ul {
    display: flex;
    cursor: pointer;
  }

  ${(props) => props.theme.window.mobile} {

  }
`;
const Gnb = styled.div`
  width: 81.63793103448276%;
  justify-content: space-between;
  > ul {
    > li {
      display: flex;
      align-items: center;
      color: #2D2D2D;
      height: 94px;
      padding: 0 33px;
      box-sizing: border-box;
    }
    
  }
`;
const Logo = styled.div`
  width: 209px;
  height: 46px;
  background-image: url(${logo});
  background-size: 170px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  align-self: center;
`;

const Menu = styled.ul`
  > li {
    > ul {
      position: absolute;
      top: 98px;
      transform: translateX(-33px);
      background-color: #FFFFFF;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
      display: none;
      flex-direction: column;
      z-index: 999;
      overflow: hidden;
      > li {
        width: 100%;
        font-weight: 400;
        color: #545454;
        padding: 8px 20px;
        font-size: 16px;
      }
    }
  }
  > li:last-child > ul {
    width: 127px;
    box-sizing: border-box;
  }
  > li:hover {
    font-weight: 700;
    color: #58A7E3;
    border-bottom: 1px solid #58A7E3;
    > ul {
      display: block;
      z-index: 99999;
      > li:hover {
        background-color: #58A7E3;
        color: #FFFFFF;
      }
    }
  }
`;

const User = styled.ul`

`;

