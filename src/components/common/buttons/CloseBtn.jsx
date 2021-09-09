import React, { useState } from 'react';
import Close from '../../../assets/icons/close.svg';

const CloseBtn = () => {
    return (
        <button className="close-btn">
            <img src={Close} alt="remove" />
        </button>
    )
};

export default CloseBtn;