import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";

import Slider from ".";
import oneday from "../../assets/img/main/mainSlideBanner_oneDay.png";
import travel from "../../assets/img/main/mainSlideBanner_travel.jpg";

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: (slide, newSlide) => setCurrentSlide(newSlide),
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          dots: true,

        }
      },
    ]
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
    },
    {
      id: 3,
      link: '/windstorm',
      img: oneday,
    },
    {
      id: 4,
      link: '/bizsupport',
      img: travel,
    },
  ];
  return (
    <Slider
      width={width > 768 ? '655px' : '100%'}
      height={width > 768 ? '365px' : '48.6vw'}
      settings={settings}
      currentSlide={currentSlide}
      totalSlides={data.length}
      player={width > 768}
      noneStyle={width < 768}
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

  ${(props) => props.theme.window.mobile} {
    height: 48.6vw;
  }
`;
