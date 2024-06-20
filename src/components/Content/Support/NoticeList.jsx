import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchInput from "../../Input/SearchInput";
import MoreButton from "../../Button/MoreButton";
import Board from "../../Borad";
import { useFormContext } from "react-hook-form";
import { getNoticeList } from "../../../api/support";
import { useNavigate } from "react-router-dom";

const NoticeList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const { watch } = useFormContext();
  useEffect(() => {
    searchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchList = () => {
    setData([]);
    setPage(1);
    getNoticeList(1,10).then((res) => {
      setData(res.data.items)
      setCount(res.data.total_count);
    })
  }
  const moreList = () => {
    getNoticeList(page ,10).then((res) => {
      setData(data.concat(res.data.items));
    });
  }
  const navigate = useNavigate();
  const goDetail = (link) => {
    navigate(link)
  }

  return (
    <>
      <SearchWrap>
        <SearchInput name='notice_searchWord' />
      </SearchWrap>
      <Board>
        {data.map((dt) => (
          <li key={dt.NOTICE_IDX}>
            <button onClick={() => goDetail(`/support/noticeDetail?noticeidx=${dt.NOTICE_IDX}`)}>
              <div>
                <span className={dt.NOTICE_YN && dt.NOTICE_YN === 'Y' ? 'type notice' : 'type'}>
                  {dt.NOTICE_YN && dt.NOTICE_YN === 'Y' ? '공지' : dt.NOTICE_IDX}
                </span>
                <span className="title">
                  {dt.TITIE}
                  {dt.NEW_MARK_YN === 'Y' && (
                    <span className="new">N</span>
                  )}
                </span>
              </div>
              <span className="date">{dt.REGIST_DTTM.split('T')[0]}</span>
            </button>
          </li>
        ))}
      </Board>
      <MoreButton onClick={() => moreList()} />
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
  ${(props) => props.theme.window.mobile} {
    > div {
      width: 100%;
    }
  }
`;


