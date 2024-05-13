import React, { useCallback, useRef } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import play from "../../assets/icon/main/icon-play.png";
import pause from "../../assets/icon/main/icon-pause.png";

const SlickSlider = ({ 
  children, 
  settings, 
  player,
  totalSlides,
  currentSlide,
  width, 
  height,
  noneStyle
}) => {
  const sliderRef = useRef(null);

  const pause = () => {
    sliderRef.current.slickPause();
  };
  const previous = useCallback(() => sliderRef.current.slickPrev(), []);
  const next = useCallback(() => sliderRef.current.slickNext(), []);
  
  return (
    <Wrap>
      <StyledSlider
        width={width}
        height={height}
        ref={sliderRef}
        noneStyle={noneStyle}
        {...settings}
      >
        {children}
      </StyledSlider>
      {player && (
        <SliderPlayerGroup> 
          <button className='prev' onClick={previous} />
          <Paging currentSlide={currentSlide} totalSlides={totalSlides} />
          <button className='next' onClick={next} />
          <button className='pause' onClick={pause} />
        </SliderPlayerGroup>
      )}
    </Wrap>
  )
}
export default SlickSlider;

const Wrap = styled.div`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  ${props => props.noneStyle && css`
    box-shadow: none;
    border-radius: none;
  `}
`;

//재생버튼은 px로 고정해야함
const SliderPlayerGroup = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    display: block;
    width: 36px;
    height: 36px;
    background-color: rgba(0, 0, 0, 0.30);
    border-radius: 6px;
    margin-right: 12px;
    background-image: url(${play});
    background-repeat: no-repeat;
    background-position: calc(50% - 3px);
    &.next {
      transform: rotate(-180deg);
    }
    &.pause {
      background-image: url(${pause});
      background-position: center;
    }
  }
`;


const Paging = ({ currentSlide, totalSlides }) => {
  return (
    <Page>{currentSlide + 1} / {totalSlides}</Page>
  )
}

const Page = styled.h2`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: #FFFFFF;
  font-family: 'SCoreDream';
  margin-right: 12px;
`;