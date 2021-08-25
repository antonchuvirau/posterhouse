import React from 'react';
import heartIcon from '../../assets/icons/heart_white.svg';
import product1 from '../../assets/images/product-1.png';


type PropsType = {};

const ProductCart: React.FC<PropsType> = () => (
    <div className="product-cart">
        <div className="product-cart__like-container">
            <img className="product-card__like-button" src={heartIcon} alt="like" />
        </div>
        <div className="product-cart__container">
            <div className="product-card__image">
                <img src={product1} alt="product1" />
            </div>
            <div className="product-cart__name">
                Glen road
            </div>
            <div className="product-cart__author">
                Lewis J Goetz
            </div>
            <div className="product-cart__price">
                $100.00
            </div>
        </div>
    </div>
);

export default ProductCart;