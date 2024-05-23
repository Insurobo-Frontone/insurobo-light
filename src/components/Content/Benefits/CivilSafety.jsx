import React from "react";
import styled from "styled-components";
import { listData2 } from "../../../api/data";
import SelectInput from "../../Input/SelectInput";
import Input from "../../Input";
import MoreButton from "../../Button/MoreButton";


const CivilSafety = () => {
  const goLink = (link) => {
    window.open(link)
  }
  return (
    <>
      <SearchWrap>
        <p>검색구분</p>
        <div>
          <SelectInput name='searchKey_city' placeholder='전체' defaultValue=''>
            <option value='city'>시도</option>
            <option value='district'>시군구</option>
          </SelectInput>
          <Input name='city_keyword' placeholder='검색어를 입력해주세요.' />
        </div>
        <SearchButton>검색</SearchButton>
      </SearchWrap>
      <ListWrap>
        <ListTable>
          <tr>
            <th>시도<br />(시군구)</th>
            <th>가입년도<br />(가입기간)</th>
            <th>보장항목</th>
            <th>보험·공제사명<br />(전화번호)</th>
            <th>담당부서<br />(전화번호)</th>
            <th>홈페이지<br />(상제정보 조회)</th>
          </tr>
          {listData2.map((dt) => (
            <tr key={dt.BASE_IDX}>
              <td>{dt.CTRD_NM}<br />{dt.SIGNGU_NM}</td>
              <td>{dt.SBSCRB_YEAR}<br />({dt.SBSCRB_BGNDE}~{dt.SBSCRB_ENDDE})</td>
              <td>{dt.GRNT_IEM}</td>
              <td>{dt.CMPNY_NM}<br />({dt.CMPNY_TELNO})</td>
              <td>{dt.LOCGOV_CHARGER_DEPT_NM}<br />({dt.LOCGOV_CHARGE_OFFM_TELNO})</td>
              <td><button onClick={() => goLink(dt.HMPG_URL)}>바로가기</button></td>
            </tr>
          ))}
        </ListTable>
      </ListWrap>
      <MoreButton />
    </>
  )
}

export default CivilSafety;

const SearchWrap = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f3f5;
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  > p {
    font-weight: 700;
    font-size: 18px;
    line-height: 49px;
  }
  > div {
    display: flex;
    > select {
      width: 200px;
      margin: 0 10px;
    }
    > input {
      width: 200px;
    }
  }
`;

const SearchButton = styled.button`
  margin-left: 10px;
  width: 120px;
  height: 48px;
  color: #FFFFFF;
  background-color: #384cff;
  font-weight: 700;
  border-radius: 8px;
  font-size: 16px;
`;

const ListWrap = styled.div``;

const ListTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  th:last-child, td:last-child {
    border-right: 0;
  }
  th, td {
    padding: 15px 20px;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #f1f3f5;
    border-left: 0;
  }
  td {
    font-size: 14px;
    font-weight: 400;
    color: #212529;
    > button {
        color: #384cff;
        font-size: 14px;
        text-decoration: underline;
        text-underline-position: under;
        line-height: 1.43;
    }
  }
  th {
    background-color: #f8f9fa;
    font-weight: bold;
    color: #495057;
    width: 140px;
  }
  th:first-child {
    width: 130px;
  }
  th:nth-child(2) {
    width: 220px;
  }
  th:nth-child(3) {
    width: 340px;
  }
  th:nth-child(4) {
    width: 210px;
  }
`;