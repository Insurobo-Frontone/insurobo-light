import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import SmallbizSupportList from "../components/Benefits/SmallbizSupportList";
import SmallbizTaxRebate from "../components/Benefits/SmallbizTaxRebate";
import CivilSafety from "../components/Benefits/CivilSafety";
import EventList from "../components/Benefits/EventList";
import { styled } from "styled-components";
import PageTitle from "../components/Content/PageTitle";
import InnerBox from "../components/Content/InnerBox";

const Benefits = () => {
  const data = [
    {
      id: 1,
      title: '소상공인 지원사업',
      value: 'smallbizSupportList'
    },
    {
      id: 2,
      title: '소상공인 세금환급',
      value: 'smallbizTaxRebate'
    },
    {
      id: 3,
      title: '시민안전보험',
      value: 'civilSafety'
    },
    {
      id: 4,
      title: '이벤트',
      value: 'eventList'
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
        <InnerBox>
          {location.pathname === `/benefits/smallbizSupportList` ? (
            <SmallbizSupportList /> 
          ) : location.pathname === `/benefits/smallbizTaxRebate` ? (
            <SmallbizTaxRebate />
          ) : location.pathname === `/benefits/civilSafety` ? (
            <CivilSafety />
          ) : location.pathname === `/benefits/eventList` && (
            <EventList />
          )}
        </InnerBox>
      </Content>
    </Layout>
  )
}
export default Benefits;

const Content = styled.div`
  padding-bottom: 140px;
`;