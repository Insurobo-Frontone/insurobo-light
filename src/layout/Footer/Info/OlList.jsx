import React from "react";
import styled, { css } from "styled-components";

const OlList = ({ children, className, type }) => {
  return (
    <ListWrap 
      className={className}
      type={type}
    >
        {children}
    </ListWrap>
  )
}
export default OlList;

const ListWrap = styled.ol`
  .dep2 {
    padding: 10px;
    > li {
      font-weight: 400;
      margin-bottom: 20px;

    }
  }
  .dep3 {
    > li:not(:first-child) {
      margin-top: 3px;
    }
  }
  &.numb {
    > li {
      counter-increment: numb;
      font-weight: 400;
      margin-bottom: 50px;
      &::before {
        content: counter(numb) '. ';
      }
      > .list-dot {
        margin-top: 30px;
        > li {
          margin-bottom: 20px;
          position: relative;
          padding-left: 14px;
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 9px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #212529;
          }
        }
      }
    }
  }
  ${props => props.type === '1' && css`
    
  `}
`;
