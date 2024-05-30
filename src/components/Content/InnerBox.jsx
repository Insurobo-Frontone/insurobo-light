import React from "react";
import styled from "styled-components";

const InnerBox = ({ children }) => {
  return (
    <InnerBoxWrap>
      {children}
    </InnerBoxWrap>
  )
}

export default InnerBox;

const InnerBoxWrap = styled.div`
  width: 1180px;
  margin: 0 auto;
  font-family: "Pretendard Variable";

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    padding: 0 20px 20px;
  }
`;
