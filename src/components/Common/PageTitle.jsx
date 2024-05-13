import React from "react";
import { styled } from "styled-components";

const PageTitle = ({ title }) => {
  return (
    <Wrap>
      {title}
    </Wrap>
  )
}

export default PageTitle;

const Wrap = styled.div`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  color: #212529;
  line-height: 1.21;
  padding: 60px 0;
  font-family: "Pretendard Variable";
`;

