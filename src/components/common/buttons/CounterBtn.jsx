import React, { useState } from 'react';

const CounterBtn = ({
    classes,
}) => {
    return (
        <div className={`counter-btn ${classes}`}>
            <button className="counter-btn__action">-</button>
            <div className="counter-btn__count">1</div>
            <button className="counter-btn__action">+</button>
        </div>
    )
};

export default CounterBtn;