import React from 'react';
import arrowRight from '../../assets/icons/arrow_right-black.svg';

type PropsType = {
    buttonLabel: string,
};

const ButtonBright: React.FC<PropsType> = ({
    buttonLabel,
}) => (
    <button className="button_main button_bright">
        <span>{buttonLabel}</span>
    </button>
);

export default ButtonBright;
