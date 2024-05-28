import React from "react";
import styled from "styled-components";
import SearchInput from "../../Input/SearchInput";
import SelectInput from "../../Input/SelectInput";
import { bizType, listData } from "../../../api/data";
import MoreButton from "../../Button/MoreButton";

const SmallbizSupportList = () => {
  return (
    <>
      <SearchWrap>
        <div>
          <SelectInput name='bizType' placeholder='전체' defaultValue=''>
            {bizType.map((dt) => (
              <option key={dt.cdId} value={dt.cdId}>{dt.cdNm}</option>
            ))}
          </SelectInput>
          <SelectInput name='searchKey' defaultValue='title'>
            <option value='title'>제목</option>
            <option value='content'>내용</option>
          </SelectInput>
        </div>
        <SearchInput name='bizSupport_searchWrod' />
      </SearchWrap>
      <ListWrap>
        <ListTable>
          <tr>
            <th>사업유형</th>
            <th>신청여부</th>
            <th>신청기간</th>
            <th>지원기관</th>
            <th>공고명</th>
          </tr>
          {listData.map((dt) => (
            <tr key={dt.BASE_IDX}>
              <td>{dt.BIZTYPE}</td>
              <td>{dt.REQNM}</td>
              <td>{dt.TERM}</td>
              <td>{dt.SPORTINSTTNM}</td>
              <td>{dt.PBLANCNM}</td>
            </tr>
          ))}
        </ListTable>
      </ListWrap>
      <MoreButton />
    </>
  )
}

export default SmallbizSupportList;

const SearchWrap = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f3f5;
  padding-bottom: 20px;
  display: flex;
  > div:first-child {
    display: flex;
    > select {
      width: 257.78px;
      margin-right: 10px;
    }
  }

  ${(props) => props.theme.window.mobile} {
    display: flex;
    flex-direction: column;
    > div:first-child {
      flex-direction: column;
      > select {
        width: 100%;
        margin-bottom: 6px;
        margin-right: 0;
      }
    }
  }
`;

const ListWrap = styled.div`
`;

const ListTable = styled.table`
  margin-bottom: -10px;
  tr:hover {
    td {
      border-color: #007aff;
    }
  }
  border-collapse: separate;
  border-spacing: 0 10px;
  th, td {
    text-align: center;
    vertical-align: middle;
    padding: 0 35px;
    color: #212529;
  }
  th {
    height: 44px;
    background-color: #e9ecef;
    font-weight: normal;
    width: 130px;
  }
  td {
    border: 1px solid #f8f9fa;
    height: 74px;
    font-weight: 400;
    background-color: #f8f9fa;
  }
  td:not(:last-child) {
    border-right: 0;
  }
  td:not(:first-child) {
    border-left: 0;
  }
  th:first-child {
    border-radius: 12px 0 0 12px;
  }
  td:first-child {
    border-radius: 12px 0 0 12px;
  }
  th:nth-child(3) {
    width: 270px;
  }
  th:nth-child(4) {
    width: 170px;
  }
  th:last-child {
    border-radius: 0 12px 12px 0;
    width: 480px;
  }
  td:last-child {
    border-radius: 0 12px 12px 0;
    text-align: start;
  }

  ${(props) => props.theme.window.mobile} {
    border-spacing: 0;
    tr {
      display: flex;
      flex-flow: row wrap;
      background-color: #f8f9fa;
      border-radius: 8px;
      margin-top: 10px;
      padding: 16px;
    }
    tr:first-child {
      display: none;
    }
    td:not(:last-child) {
      background-color: #e9ecef;
      height: 26px;
      line-height: 1.5;
      border-radius: 6px;
      padding: 4px 12px;
      font-size: 12px;
      color: #495057;
      margin-bottom: 5px;
      margin-right: 5px;
      border: 0;
    }
    td:first-child {
      border-radius: 6px;
    }
    td:last-child {
      width: 100%;
      padding: 0;
      height: auto;
      font-size: 14px;
      margin-top: 5px;
      line-height: 1.43;
      border: 0;
    }
  }
`;

