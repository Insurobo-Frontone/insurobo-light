import React, { useState } from "react";
import { styled } from "styled-components";
import { faqList } from "../../../api/data";

const FaqList = () => {
  const [index, setIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const openAnswer = (id) => {
    setToggle((prev) => !prev);
    setIndex(id);
  }
  return (
    <FaqListWrap>
      {faqList.map((dt) => (
        <li className={toggle ? 'open' : ''} key={dt.BASE_IDX}>
          <button onClick={() => openAnswer(dt.BASE_IDX)}>
            {dt.TITIE}
          </button>
          {toggle && dt.BASE_IDX === index && (
            <div className="sub-data" dangerouslySetInnerHTML={{ __html: dt.CONTENT }} />
          )}
        </li>
      ))}
    </FaqListWrap>
  )
}
export default FaqList;

const FaqListWrap = styled.ul`
  > li {
    width: 100%;
    height: auto;
    padding: 2rem;
    border-radius: 1.2rem;
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
  }
`;

