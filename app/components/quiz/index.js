import React from 'react';
import logo1 from 'images/logo1.jpg';
import logo2 from 'images/logo2.jpg';
import logo3 from 'images/logo3.jpg';
import logo4 from 'images/logo4.jpg';
import logo5 from 'images/logo5.jpg';
import logo6 from 'images/logo6.jpg';
import { ContainerQuiz, Text, LogoContainer } from './style';

function Quiz() {
  return (
    <ContainerQuiz>
      <Text>Se indovini è tua</Text>
      <LogoContainer>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </LogoContainer>
    </ContainerQuiz>
  );
}

export default Quiz;
