import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BoradDetail from "../../Borad/BoradDetail";
import { getNoticeDetail } from "../../../api/support";
import PageTitle from "../PageTitle";


const NoticeDetail = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const id = searchParams.get('noticeidx');

  useEffect(() => {
   getNoticeDetail(id).then((res) => {
      setData(res.data);
      console.log(res.data)
    })
  }, [id]);

  return (
    <>
      <PageTitle title='공지사항'/>
      <BoradDetail data={data} notice />
    </>
  )
}
export default NoticeDetail;

