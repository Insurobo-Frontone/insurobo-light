import React from "react";
import styled from "styled-components";

const Table = ({ children, className }) => {
  return (
    <TableWrap 
      className={className}
    >
      {children}
    </TableWrap >
  )
}
export default Table;

const TableWrap = styled.table`
  border-top: 1px solid #f1f3f5;
  margin: 50px 0;
  th, td {
    border-bottom: 1px solid #f1f3f5;
    border-right: 1px solid #f1f3f5;
    padding: 15px 20px;
    vertical-align: middle;
    
  &:last-child {
    border-right: 0;
  }
 }
 th {
    padding: 15px 20px;
    color: #495057;
    background-color: #f8f9fa;
    text-align: center;
  }
  td {
    text-align: left;
  }
 &.table_01 {
  th {
    &:first-child {
      width: 15%;
    }
    &:nth-child(2) {
      width: 45%;
    }
    &:nth-child(3) {
      width: 40%;
    }
  }
 }
 &.table_02 {
  th {
    &:first-child {
      width: 25%;
    }
    &:nth-child(2) {
      width: 75%;
    }
  }
 }
 &.table_03 {
  th {
    width: 295px;
  }
 }
 &.table_04 {
  width: 100%;
  th {
    &:first-child {
      width: 40%;
    }
    &:nth-child(2) {
      width: 30%;
    }
    &:nth-child(3) {
      width: 30%;
    }
  }
 }
 &.table_05 {
  width: 100%;
  th {
    &:first-child {
      width: 30%;
    }
    &:nth-child(2) {
      width: 25%;
    }
    &:nth-child(3) {
      width: 45%;
    }
  }
 }
`;
