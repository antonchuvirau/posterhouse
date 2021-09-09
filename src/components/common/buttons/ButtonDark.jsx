import React from 'react';

const ButtonDark = ({
    label,
    classes,
    small,
}) => (
    <button className={`button_dark  ${classes}`}>
        <span>{label}</span>
    </button>
);

export default ButtonDark;
