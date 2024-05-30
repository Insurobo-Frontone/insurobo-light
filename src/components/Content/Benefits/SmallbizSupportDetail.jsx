import React, { useEffect, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { listData } from "../../../api/data";


import BoradDetail from "../../Borad/BoradDetail";
import { CommonApi } from "../../../api/CommonApi"

const SmallbizSupportDetail = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);

  const id = searchParams.get('detailIdx');
  console.log(id);
  
  const getDetailData = useCallback(async () => {
    // const res = await CommonApi.get(`/api/info/smallbiz_support_detail?detailIdx=${id}`);
    setData(listData[0])
    // setData(res.data.data);

  }, [id]);
  console.log(data)
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

