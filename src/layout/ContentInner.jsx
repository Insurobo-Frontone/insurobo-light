import React from "react";
import styled from "styled-components";

const ContentInner = ({ children }) => {
  return (
    <ContentInnerWrap>
      {children}
    </ContentInnerWrap>
  )
}

export default ContentInner;

const ContentInnerWrap = styled.div`
  width: 1160px;
  margin: 0 auto;
  ${(props) => props.theme.window.mobile} {

  } 
`;