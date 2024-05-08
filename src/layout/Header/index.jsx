import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/common/mainLogo.jpg";
import ContentInner from "../ContentInner";

const Header = () => {
  const navigate = useNavigate();
  const menuData = [
    {
      id: 1,
      link: '/',
      title: '금융'
    },
    {
      id: 2,
      link: '/',
      title: '혜택'
    },
    {
      id: 3,
      link: '/',
      title: '고객지원'
    },
    {
      id: 4,
      link: '/',
      title: '회사소개'
    },
  ];

  function goHome() {
    navigate('/');
  }

  return (
    <Wrap>
      <ContentInner>
        <Logo onClick={() => goHome()} />
        <Gnb>
          <Menu>
            {menuData.map((dt) => (
              <li key={dt.id}>
                <Link to={dt.link}>{dt.title}</Link>
              </li>
            ))}
          </Menu>
          <User>
            <li>
              <Link to=''>로그인</Link>
            </li>
            <li>
              <Link to=''>회원가입</Link>
            </li>
          </User>
        </Gnb>
      </ContentInner>
    </Wrap>
  )
}

export default Header;

const Wrap = styled.div`
  padding: 25px 0 23px;
  border-bottom: 1px solid #F0F0F0;
  div, ul {
    display: flex;
  }
`;
const Gnb = styled.div`
  width: 81.63793103448276%;
  justify-content: space-between;
  > ul {
    > li {
      > a {
        display: block;
        padding: 10px 30px;
        color: #2D2D2D;
        font-size: 18px;
      }
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
`;

const Menu = styled.ul`
  > li {
    position: relative;
  }
  > li:hover {
    ::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -22px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #58A7E3;
    }
    > a {
      font-weight: 700;
      color: #58A7E3;
    }
  }
`;

const User = styled.ul`

`;

