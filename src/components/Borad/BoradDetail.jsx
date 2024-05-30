import React from "react";
import { styled } from "styled-components";
import CommonButton from "../Button/CommonButton";
import { useNavigate } from "react-router-dom";

const BoradDetail = ({ data }) => {
  const navigate = useNavigate()
  return (
    <>
      <BoradDetailWrap>
        <BoradTop>
          <h2>{data.PBLANCNM}</h2>
          {data.SPORTINSTTNM && data.REQNM && (
            <dl>
              <dt>주관기관 :</dt>
              <dd>&nbsp;{data.SPORTINSTTNM}</dd>
              <dt>진행상태 :</dt>
              <dd>&nbsp;{data.REQNM}</dd>
            </dl>
          )}
        </BoradTop>
        <BoradContent dangerouslySetInnerHTML={{ __html: data.POLICYCNTS }} />
          {data.TERM && (<TermDate>신청기간 : {data.TERM}</TermDate>)}
          {data.REFRNC && (<SubData dangerouslySetInnerHTML={{ __html: data.REFRNC }} />)}
      </BoradDetailWrap>
      <ButtonWrap>
        {data.PBLANCDTLURL && <CommonButton title='상세정보' onClick={() => window.open(data.PBLANCDTLURL, '_blank')}/>}
        <CommonButton title='목록' className='gray' onClick={() => navigate(-1)} />
      </ButtonWrap>
    </>
  )
}

export default BoradDetail;

const BoradDetailWrap = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #f1f3f5;
  ${(props) => props.theme.window.mobile} {

  }
`;

const BoradTop = styled.div`
  padding-bottom: 20px;
  > h2 {
    font-size: 22px;
    margin-top: 16px;
    line-height: 1.36;
    color: #212529;
  }
  > dl {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    > dd, dt {
      color: #495057;
    }
    > dt:not(:first-child) {
      position: relative;
      margin-left: 10px;
      padding-left: 10px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 1px;
        height: 10px;
        margin-top: -5px;
        background-color: #adb5bd;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 10px;
    > h2 {
      margin-top: 10px;
      font-size: 16px;
    }
    > dl {
      > dd, dt {
        font-size: 14px;
      }
    }
  }
`;

const BoradContent = styled.div`
  padding: 20px 0;
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  min-height: 353px;
  font-size: 16px;
  line-height: 1.5;
  p {
    color: #212529;
    font-weight: 400;
    > b {
      font-weight: 700;
      > span {
        font-weight: 700;
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    min-height: 300px;
    line-height: 1.57;
    white-space: pre-wrap;
    p {
      font-size: 14px;
    }
  }
`;

const TermDate = styled.div`
  padding-top: 20px;
  color: #495057;
  ${(props) => props.theme.window.mobile} {
    padding-top: 10px;
    font-size: 14px;

  }
`;

const SubData = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: #f8f9fa;
  > p {
    font-weight: 400;
    color: #212529;
    > b {
      font-weight: 700;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-top: 10px;
    > p {
      font-size: 14px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  > button {
    &:nth-child(2) {
      margin-left: 10px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    justify-content: space-between;
    > button {
      width: 49%;
      min-width: 0;
      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }
`;
