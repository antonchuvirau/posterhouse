import React from 'react';

const ButtonBright = ({
    label,
    classes,
}) => (
    <button className={`button_bright--width_small ${classes}`}>
        <span>{label}</span>
    </button>
);

export default ButtonBright;
