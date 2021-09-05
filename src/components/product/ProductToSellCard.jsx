import React, { useState } from 'react';
import ProductToSellMock from '../../assets/images/Product-to-sell-mock.png'
import Close from '../../assets/icons/close.svg';

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
                    <div className="product-to-sell-card__count">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                </div>
            </div>
            <div className="product-to-sell-card__price-container">
                <button className="product-to-sell-card__close">
                    <img src={Close} alt="remove" />
                </button>
                <div className="product-to-sell-card__price">
                    $ 100.00
                </div>
            </div>
        </div>
    )
};

export default ProductToSellCard;