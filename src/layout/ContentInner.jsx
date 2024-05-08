import React from "react";
import styled, { css } from "styled-components";

const ContentInnerWrap = styled.div`

  width: 1160px;
  margin: 0 auto;
  ${(props) => props.theme.window.mobile} {

  } 
`;


const ContentInner = ({ children }) => {
  return (
    <ContentInnerWrap>
      {children}
    </ContentInnerWrap>
  )
}

export default ContentInner;