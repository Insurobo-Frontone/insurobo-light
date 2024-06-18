import React from "react";
import styled from "styled-components";

const ListTitle = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
}
export default ListTitle;

const Title = styled.p`
  font-weight: 700;
  margin: 40px 0;
`;

