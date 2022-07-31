import React from 'react';
import car from 'images/car.png';
import { Focus, FocusMask, FocusMaskInner } from './style';

function Blur() {
  return (
    <Focus>
      <FocusMask>
        <FocusMaskInner>
          <img src={car} alt="" />
        </FocusMaskInner>
      </FocusMask>
    </Focus>
  );
}

export default Blur;
