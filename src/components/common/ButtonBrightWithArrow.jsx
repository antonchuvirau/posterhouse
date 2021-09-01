import React from 'react';
import arrowRight from '../../assets/icons/arrow_right-black.svg';

const ButtonBrightWithArrow = ({
    buttonLabel,
}) => (
    <button className="button_bright_arrow">
        <span>{buttonLabel}</span>
        <img src={arrowRight} alt="arrow__right" className="button__icon" />
    </button>
);

export default ButtonBrightWithArrow;
