import React, { useState } from 'react';
import ProductToSellMock from '../../assets/images/Product-to-sell-mock.png'
import CounterBtn from '../common/buttons/CounterBtn';
import CloseBtn from '../common/buttons/CloseBtn';

const ProductToSellCard = () => {
    return (
        <div className="product-to-sell-card">
            <div className="product-to-sell-card__description">
                <div className="product-to-sell-card__image">
                    <img src={ProductToSellMock} alt="product-to-sell" />
                </div>
                <div className="product-to-sell-card__info-container">
                    <div className="product-to-sell-card__info">
                        <div className="product-to-sell-card__name">
                            "Buy", Long Island University
                        </div>
                        <div className="product-to-sell-card__author">
                            André Kertész
                        </div>
                    </div>
                    <CounterBtn classes="product-to-sell-card__count" />
                </div>
            </div>
            <div className="product-to-sell-card__price-container">
                <CloseBtn />
                <div className="product-to-sell-card__price">
                    $ 100.00
                </div>
            </div>
        </div>
    )
};

export default ProductToSellCard;