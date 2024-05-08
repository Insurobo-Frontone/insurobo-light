import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
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
  width, 
  height 
}) => {
  const [currentSlide] = useState(0);
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
        {...settings}
      >
        {children}
      </StyledSlider>
      {player && (
        <SliderPlayerGroup> 
          <PrevArrow onClick={previous}/>
          <Paging currentSlide={currentSlide} totalSlides={totalSlides} />
          <NextArrow onClick={next} />
          <PauseButton onClick={pause} />
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
`;

//재생버튼은 px로 고정해야함
const SliderPlayerGroup = styled.div`
  width: 156px;
  height: 44px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 11px 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PauseButton = styled.button`
  width: 12px;
  height: 22px;
  background-image: url(${pause});
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) => props.theme.window.mobile} {
    width: 10px;
    height: 15px;
  } 
`;
const NextArrow = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${play});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  transform: rotate(-180deg);
  cursor: pointer;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.30);


`;

const PrevArrow = styled.div`
  width: 36px;
  height: 36px;
  background-image: url(${play});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center;
  cursor: pointer;
`;

const Paging = ({ currentSlide, totalSlides }) => {
  return (
    <Page>{`${currentSlide + 1} / ${totalSlides}`}</Page>
  )
}

const Page = styled.h2`
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  color: #FFFFFF;
  letter-spacing: -1.1px;
`;