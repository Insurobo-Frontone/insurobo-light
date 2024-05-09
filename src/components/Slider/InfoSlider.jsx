import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Slider from ".";

const InfoSlider = () => {
  const navigate = useNavigate();
  const settings = {
    speed: 1000,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          vertical: true,
          verticalSwiping: true,
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        }
      },
    ]
  }
  const data = [
    {
      id: 1,
      title: 'dsdsdsd',
      content: 'sdsdsdsds'
    }
  ]
  
  return (
    <Slider
 
      settings={settings}
    >
      {data.map((dt) => (
        <Card key={dt.id}>
          <CardLink to={`/board?id=${dt.id}`}>
            <TitleWrap>
              <h2>{dt.title}</h2>
              <Label 
                label={dt.id === 6 ? 'NEW' : 'HOT' }
                color={dt.id === 6 ? 'BLUE5' : 'RED'}
                bgColor={dt.id === 6 ? 'BLUE_RGBA' : 'RED_RGBA'}
              />
            </TitleWrap>
            <ContentWrap>
              <div dangerouslySetInnerHTML={{__html: dt.content}}></div>
            </ContentWrap>
          </CardLink>
      </Card>
      ))}
    </Slider>
  )
}

export default InfoSlider;

const Card = styled.div`
  height: 365px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardLink = styled(Link)``;

const Label = styled.div``;

const TitleWrap = styled.div``;

const ContentWrap = styled.div``;
