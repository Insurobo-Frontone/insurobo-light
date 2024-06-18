import React from "react";
import styled from "styled-components";

const InnerText = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
}
export default InnerText;

const Title = styled.div`
  font-weight: 400;
`;

