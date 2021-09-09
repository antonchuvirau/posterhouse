import React from 'react';
import arrowRight from '../../../assets/icons/arrow--right-white.svg';

const ButtonDarkWithArrow = ({
    label,
    classes,
}) => (
    <button className={`button_dark_arrow ${classes}`}>
        <span>{label}</span>
        <img src={arrowRight} alt="arrow__right" className="button__icon" />
    </button>
);

export default ButtonDarkWithArrow;
