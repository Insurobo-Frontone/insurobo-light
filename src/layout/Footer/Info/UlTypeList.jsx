import React from "react";
import styled from "styled-components";

const UlTypeList = ({ children, className, type }) => {
  return (
    <ListWrap
      className={className}
      type={type}
    >
      {children}
    </ListWrap>
  )
}
export default UlTypeList;

const ListWrap = styled.ul`
  margin-top: 40px;
  > li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
