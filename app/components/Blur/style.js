import styled, { keyframes } from 'styled-components';
import car from 'images/car.png';

const maskMove = keyframes`
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(100vw);
    }
  }`;

const maskInnerMove = keyframes`
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100vw);
    }
  }
`;

export const Focus = styled.div`
  color: white;
  position: relative;
  width: 100%;
  height: 85vh;
  &:before {
    filter: blur(20px);
    background-image: url(${car});
    background-size: cover;
    display: inline-block;
    width: 100vw;
    height: 85vh;
    content: '';
  }
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 100%;
    top: -4px;
    left: 0;
    border-top: 2px solid;
    border-bottom: 2px solid;
    animation: ${maskMove} 1s linear infinite alternate;
  }
`;

export const FocusMask = styled.div`
  overflow: hidden;
  position: absolute;
  width: 20px;
  height: 85vh;
  top: 0;
  left: 0;
  animation: ${maskMove} 1s linear infinite alternate;
`;

export const FocusMaskInner = styled.div`
  animation: ${maskInnerMove} 1s linear infinite alternate;
  img {
    width: 100vw;
    height: auto;
  }
`;
