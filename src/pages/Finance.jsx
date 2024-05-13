import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import SmallbizLoan from "../components/Finamce/SmallbizLoan";
import SmallbizCard from "../components/Finamce/SmallbizCard";
import StealthBankbook from "../components/Finamce/StealthBankbook";

const Finance = () => {
  const location = useLocation();

  const data = [
    {
      id: 1,
      title: '소상공인 전용대출',
      value: 'smallbizLoan'
    },
    {
      id: 2,
      title: '소상공인 신용카드',
      value: 'smallbizCard'
    },
    {
      id: 3,
      title: '광주은행 Wa뱅크 스텔스통장',
      value: 'stealthBankbook'
    },
  ]

  return (
    <Layout>
      <SubHeader data={data} />
      {location.pathname === `/finance/smallbizLoan` ? (
        <SmallbizLoan /> 
      ) : location.pathname === `/finance/smallbizCard` ? (
        <SmallbizCard />
      ) : location.pathname === `/finance/stealthBankbook` && (
        <StealthBankbook />
      )}
    </Layout>
  )
}
export default Finance;