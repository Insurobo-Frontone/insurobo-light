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
    height: 44px;
    > li {
      position: relative;
      padding-right: 30px;
      margin-right: 10px;
      > img {
        width: 26px;
        
      }
    }
    > li::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      width: 20px;
      height: 20px;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    > li:last-child::after {
      content: none;
    }
  }
`;
