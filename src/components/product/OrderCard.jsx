import React, { useState } from 'react';
import orderCardMock from '../../assets/images/order-card-mock.jpg'

const OrderCard = () => {
    return (
        <div className="order-card">
            <div className="order-card__image-container">
                <div className="order-card__count">
                    1
                </div>
                <img className="order-card__image" src={orderCardMock} alt="order-card" />
            </div>

            <div className="order-card__description">
                <div className="order-card__product-name">
                    "Buy", Long Island University
                </div>

                <div className="order-card__author">
                    André Kertész
                </div>
            </div>

            <div className="order-card__price">
                $ 100.00
            </div>
        </div>
    )
};

export default OrderCard;