import React from 'react';
import styled from 'styled-components';
import MainTitle from './MainTitle';
import InfoSlider from '../Slider/InfoSlider';



function InfoPlace() {

  return (
    <Wrap>
      <MainTitle
        title='알아두면 좋은 소상공인 정보마당'
        text='혜택이 쏟아지는 모든 정보를 한 눈에, 원하는 정보를 골라서!'
        icon
      />
      <InfoSlider />
    </Wrap>
  );
}

export default InfoPlace;

const Wrap = styled.div`
  padding-top: 40px;
  background-color: #FCFCFC;


  ${props => props.theme.window.mobile} {
  
  }
`;