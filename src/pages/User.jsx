import React from "react";
import { useLocation } from "react-router-dom";
import InnerBox from "../components/Content/InnerBox";
import Layout from "../layout";
import Login from "../components/User/Login";
import UserJoin from "../components/User/UserJoin";
import styled from "styled-components";

const User = () => {
  const location = useLocation();
  return (
    <Layout>
      <Content>
        <InnerBox small>
          {location.pathname === '/user/login' ? (
            <>
              <SubTitle>로그인정보를 입력해 주세요.</SubTitle>
              <Login />
            </>

          ) : location.pathname === '/user/userJoin' && (
            <>
              <SubTitle>회원정보를 입력해 주세요.</SubTitle>
              <UserJoin />
            </>
          )}
        </InnerBox>
      </Content>
    </Layout>
  )
}

export default User;

const Content = styled.div`
  padding-bottom: 140px;
`;


const SubTitle = styled.p`
  margin-top: 40px;
  font-weight: 400;
  font-size: 20px;
  color: #212529;
`;
