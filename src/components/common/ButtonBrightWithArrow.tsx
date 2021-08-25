import React from 'react';
import arrowRight from '../../assets/icons/arrow_right-black.svg';

type PropsType = {
    buttonLabel: string,
};

const ButtonBrightWithArrow: React.FC<PropsType> = ({
    buttonLabel,
}) => (
    <button className="button_main button_bright">
        <span>{buttonLabel}</span>
        <img src={arrowRight} alt="arrow__right" className="button__icon" />
    </button>
);

export default ButtonBrightWithArrow;
