import React from 'react';
import close from 'images/close.png';
import PropTypes from 'prop-types';
import { ContainerCloseBtn } from './style';

function CloseButton({ closeAnimation }) {
  return (
    <ContainerCloseBtn onClick={() => closeAnimation()}>
      <img src={close} alt="" />
    </ContainerCloseBtn>
  );
}

CloseButton.propTypes = {
  closeAnimation: PropTypes.func,
};
export default CloseButton;
