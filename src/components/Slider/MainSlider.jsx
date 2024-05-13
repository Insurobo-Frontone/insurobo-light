import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Slider from ".";
import oneday from "../../assets/img/main/mainSlideBanner_oneDay.png";
import travel from "../../assets/img/main/mainSlideBanner_travel.jpg";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: (slide, newSlide) => setCurrentSlide(newSlide)
  }
  
  const data = [
    {
      id: 1,
      link: '/freeApply',
      img: oneday,
    },
    {
      id: 2,
      link: '/bizsupport',
      img: travel,
    }
  ];
  return (
    <Slider
      width='655px'
      height='365px'
      settings={settings}
      currentSlide={currentSlide}
      totalSlides={data.length}
      player
    >
      {data.map((dt) => (
        <Banner 
          key={dt.id}
          img={dt.img}
          onClick={() => navigate(dt.link)}
        />
      ))}
    </Slider>
  )
}

export default MainSlider;

const Banner = styled.div`
  height: 365px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
