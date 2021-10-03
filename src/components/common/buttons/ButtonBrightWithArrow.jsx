import React from 'react';
import arrowRight from '../../../assets/icons/arrow_right-black.svg';

const ButtonBrightWithArrow = ({
    label,
}) => (
    <button className="button--bright__wide">
        <span>{label}</span>
        <img src={arrowRight} alt="arrow__right" className="button__icon" />
    </button>
);

export default ButtonBrightWithArrow;
