import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { listData } from "../../../api/data";
// import { CommonApi } from "../../../api/CommonApi"

import BoradDetail from "../../Borad/BoradDetail";


const SmallbizSupportDetail = () => {
  // const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);

  // const id = searchParams.get('detailIdx');

  
  const getDetailData =  () => {
    // const res = await CommonApi.get(`/api/info/smallbiz_support_detail?detailIdx=${id}`);
    setData(listData[0])
    // setData(res.data.data);

  };

  useEffect(() => {
    getDetailData();
  }, []);
  
  return (
    <>
      <BoradDetail data={data} />
    </>
  )
}
export default SmallbizSupportDetail;

