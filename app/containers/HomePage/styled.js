import styled, { css } from 'styled-components';

css`
  @keyframes enterRight {
    0 % {
      right: -100vw;
    }

    100 % {
      right: 0;
    }
  }

  @keyframes exitRight {
    0 % {
      right: 0;
    }

    100 % {
      right: -100vw;
    }
  }
`;

export const App = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  right: 0vw;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  animation: enterRight 2s;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  ${props =>
    props.animation === 'enter' &&
    css`
      animation: enterRight 2s;
    `}
  ${props =>
    props.animation === 'exit' &&
    css`
      animation: exitRight 2s;
    `}
}`;

export const closeContainer = styled.div`
  position: absolute;
  right: 1vw;
  top: 1vw;
  width: 5vw;
  height: 5vw;
  z-index: 99;
`;

export const blurSection = styled.div`
  position: relative;
  height: 75%;
  width: 100%;
  margin-top: -20%;
`;

export const quizSection = styled.div`
  position: relative;
  height: 20%;
  width: 100%;
`;
