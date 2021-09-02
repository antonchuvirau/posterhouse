import React from 'react';

const ButtonBright = ({
    buttonLabel,
    small,
}) => (
    <button className="button_bright--width_small">
        <span>{buttonLabel}</span>
    </button>
);

export default ButtonBright;
