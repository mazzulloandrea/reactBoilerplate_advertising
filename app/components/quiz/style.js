import styled, { keyframes } from 'styled-components';

const textPulse = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.7);
  }
`;

export const ContainerQuiz = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  text-align: center;
  padding: 1vh;
  animation: ${textPulse} 0.5s infinite;
  font-weight: bold;
  color: orange;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  img {
    width: 10vw;
    margin-right: 6vw;
  }
`;
