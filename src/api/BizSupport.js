import { CommonApi } from "./CommonApi"


export const getBizSupportList = async (page, per_page, searchCodeA, searchDvsn, searchStr) => {
  return CommonApi.get(
    `/api/info/smallbiz_support_list?${searchCodeA && `searchCodeA=${searchCodeA}&`}${searchStr && `searchDvsn=${searchDvsn}&searchStr=${searchStr}&`}page=${page}&per_page=${per_page}`
  );
};

export const getBizSupportDetail = async (id) => {
  return CommonApi.get(
    `/api/info/smallbiz_support_detail?pblancseq=${id}`);
};

