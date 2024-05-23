import React from "react";
import styled from "styled-components";
import SearchInput from "../../Input/SearchInput";
import { noticeData } from "../../../api/data";
import MoreButton from "../../Button/MoreButton";

const NoticeList = () => {
  return (
    <>
      <SearchWrap>
        <SearchInput name='notice_searchWord' />
      </SearchWrap>
      <ListWrap>
        <ul>
          {noticeData.map((dt) => (
            <li key={dt.BASE_IDX}>
              <button>
                <div>
                  <span className={dt.NOTICE_YN && dt.NOTICE_YN === 'Y' ? 'type notice' : 'type'}>
                    {dt.NOTICE_YN && dt.NOTICE_YN === 'Y' ? '공지' : dt.BASE_IDX}
                  </span>
                  <span className="title">
                    {dt.TITIE}
                    {dt.NEW_MARK_YN === 'Y' && (
                      <span className="new">N</span>
                    )}
                  </span>
                </div>
                <span className="date">{dt.NOTICE_DATE}</span>
              </button>
            </li>
          ))}
        </ul>
      </ListWrap>
      <MoreButton />
    </>
  )
}
export default NoticeList;

const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f3f5;
  > div {
    width: 265px;
  }
`;

const ListWrap = styled.div`
  > ul {
    > li {
      &:first-child {
        margin-top: 0;
      }
      margin-top: 10px;
      > button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 20px;
        border-radius: 12px;
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        text-align: left;
        &:hover {
          border-color: #384cff;
        }
        > div {
          display: flex;
          align-items: center;
        }
        .type {
          display: flex;
          width: 100px;
          height: 34px;
          padding: 0 30px;
          line-height: 34px;
          text-align: center;
          align-items: center;
          justify-content: center;
          background-color:#e9ecef;
          color: #495057;
          border-radius: 6px;
        }
        .type.notice {
          background-color: #384cff;
          color: #FFFFFF;
          font-weight: 700;
        }
        .title {
          margin-left: 20px;
          color: #212529;
          text-align: left;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .new {
            display: inline-block;
            margin-left: 10px;
            margin-top: -1px;
            font-weight: bold;
            line-height: 1.38;
            color: #e50113;
          }
        }
        .date {
          margin-left: 20px;
          color: #adb5bd;
        }
      }
    }
  }
`;
