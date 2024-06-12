import React from "react";
import { useFormContext } from "react-hook-form";
import styled, { css } from "styled-components";
import checkboxBtn from "../../assets/icon/common/icon-checkbox_default.png";
import checkboxChekedBtn from "../../assets/icon/common/icon-checkbox_checked.png";

const CheckInput = ({ label, name, required, user }) => {
  const { register } = useFormContext();
  return (
    <CheckInputWrap user={user}>
      <input
        type="checkbox"
        name={name}
        id={name}
        {...register(name, {
					required: required
				})}
      />
      <label htmlFor={name}>{label}</label>
    </CheckInputWrap>
  )
}

export default CheckInput;

const CheckInputWrap = styled.div`
  display: flex;
  align-items: center;
  > input {
    background-image: url(${checkboxBtn});
    background-size: 100% auto;
    width: 24px;
    height: 24px;
    appearance:none;
    -webkit-appearance: none;
    -moz-appearance:none;
    &:checked {
      background-image: url(${checkboxChekedBtn});
    }
  }
  > label {
    margin-left: 10px;
    font-weight: 700;
    color: #495057;
    
  }
  ${props => props.user && css`
    > label {
      font-weight: 400;
    }
  `}
  ${props => props.theme.window.mobile} {
    > label {
      font-size: 14px;
    }
  }
`;
