import React from 'react';

const ButtonDark = ({
    buttonLabel,
    classes,
    small,
}) => (
    <button className={`button_dark  ${classes}`}>
        <span>{buttonLabel}</span>
    </button>
);

export default ButtonDark;
