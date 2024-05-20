import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import SmallbizLoan from "../components/Finamce/SmallbizLoan";
import SmallbizCard from "../components/Finamce/SmallbizCard";
import StealthBankbook from "../components/Finamce/StealthBankbook";
import SmallbizSupportList from "../components/Benefits/SmallbizSupportList";
import SmallbizTaxRebate from "../components/Benefits/SmallbizTaxRebate";
import CivilSafety from "../components/Benefits/CivilSafety";
import EventList from "../components/Benefits/EventList";
import { styled } from "styled-components";

const Benefits = () => {
  const location = useLocation();

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
  ]

  return (
    <Layout>
      <SubHeader data={data} />
      <Wrap>
        {location.pathname === `/benefits/smallbizSupportList` ? (
          <SmallbizSupportList /> 
        ) : location.pathname === `/benefits/smallbizTaxRebate` ? (
          <SmallbizTaxRebate />
        ) : location.pathname === `/benefits/civilSafety` ? (
          <CivilSafety />
        ) : location.pathname === `/benefits/eventList` && (
          <EventList />
        )}
      </Wrap>
    </Layout>
  )
}
export default Benefits;

const Wrap = styled.div`
  width: 1180px;
  margin: 0 auto;

`;