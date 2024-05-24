import React from "react";
import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import PageTitle from "../components/Content/PageTitle";
import RightPeople from "../components/Content/Company/RightPeople";
import RecruitSystem from "../components/Content/Company/RecruitSystem";
import RecruitList from "../components/Content/Company/RecruitList";
import Introduction from "../components/Content/Company/Introduction";


const Company = () => {
  const data = [
    {
      id: 1,
      title: '소개',
      value: 'introduction'
    },
    {
      id: 2,
      title: '인재상',
      value: 'rightPeople'
    },
    {
      id: 3,
      title: '인사제도',
      value: 'recruitSystem'
    },
    {
      id: 4,
      title: '채용공고',
      value: 'recruitList'
    },
  ];
  const location = useLocation();
  const divide =  location.pathname.split('/')[2];

  return (
    <Layout>
      <SubHeader data={data} />
      <Content>
        {data.filter((path) => path.value === divide).map((dt) => (
          <PageTitle title={dt.title} id={dt.id} />
        ))}
        {location.pathname === `/company/introduction` ? (
          <Introduction />
          ) : location.pathname === `/company/rightPeople` ? (
            <RightPeople />
          ) : location.pathname === `/company/recruitSystem` ? (
            <RecruitSystem />
          ) : location.pathname === `/company/recruitList` && (
          <RecruitList />
        )}
      </Content>
    </Layout>
  )
}
export default Company;

const Content = styled.div`
  padding-bottom: 140px;
`;