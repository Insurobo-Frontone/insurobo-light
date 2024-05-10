import React, { useEffect } from "react";
import Layout from "../layout";
import SubHeader from "../layout/Header/SubHeader";
import { useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";
const Finance = () => {
  const location = useLocation();
  const { watch } = useFormContext();
  useEffect(() => {
    console.log(watch('finance'))
  }, [])
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
      <SubHeader data={data} name='finance' />
    </Layout>
  )
}
export default Finance;