import React, { useState } from 'react';
import ButtonDarkWithArrow from '../common/buttons/ButtonDarkWithArrow';

const NoProductInList = ({
    title,
    noProductsInListDescription,
}) => {
    return (
        <div className="no-products-in-list">
            <h3 className="no-products-in-list__title">
                {title}
            </h3>
            <ButtonDarkWithArrow
                label="Continue shopping"
                classes="no-products-in-list__action-btn"
            />
        </div>
    )
};

export default NoProductInList;