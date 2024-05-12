import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import ContentInner from "../ContentInner";
import home from "../../assets/icon/common/icon-home.png";
import arrow from "../../assets/icon/common/icon-arrow.png";

const SubHeader = ({ data, name }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { register, watch } = useFormContext();
  const handleChange = (e) => {
    navigate(e.target.value);
  }
  return (
    <Wrap>
      <ContentInner>
        <ul>
          <li><img src={home} alt="home" /></li>
          <li>
            { 
              name === 'finance' ? '금융' :
              name === 'benefits' ? '혜택' :
              name === 'support' ? '고객지원' :
              name === 'company' && '회사소개'
            }
          </li>
          <li>
            <select
              {...register(name)}
              onChange={handleChange}
            >
              {data.map((dt) => (
                <option
                  selected={location.pathname === `/${name}/${watch(name)}`}
                  value={dt.value}
                >
                  {dt.title}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </ContentInner>
    </Wrap>
  )
}
export default SubHeader;

const Wrap = styled.div`
  background-color: #2EA5FF;
  ul {
    display: flex;
    align-items: center;
    
    > li {
      position: relative;
      padding-right: 30px;
      margin-right: 10px;
      font-size: 14px;
      color: #FFFFFF;
      font-weight: 400;
      height: 44px;
      display: flex;
      align-items: center;
      > img {
        width: 26px;
      }
      > select {
        background: none;
        width: 213px;
        font-weight: 300;
      }
    }
    > li::after {
      content: '';
      position: absolute;
      right: 0;
      top: 12px;
      width: 20px;
      height: 20px;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    > li:last-child {
      padding-right: 0;
      margin-right: 0;
    }
    > li:last-child::after {
      content: none;

    }
  }
`;
