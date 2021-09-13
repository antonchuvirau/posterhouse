import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import heartIcon from '../../assets/icons/heart_white.svg';
import { WHISH_LIST_ADD_ONE } from '../../redux/whish-list-reducer';

const ProductCard = ({
    image,
    name,
    author,
    price,
    id,
}) => {
    const dispatch = useDispatch();

    const onLikeButtonClick = useCallback(() => {
        dispatch({ type: WHISH_LIST_ADD_ONE, id });
    }, [dispatch, id]);

    return (
        <div className="product-cart">
            <div className="product-cart__like-container">
                <img onClick={onLikeButtonClick} className="product-card__like-button" src={heartIcon} alt="like" />
            </div>
            <div className="product-cart__container">
                <div className="product-card__image">
                    <img src={image} alt="product1" />
                </div>
                <div className="product-cart__name">
                    <a href="./product.html">{name}</a>
                </div>
                <div className="product-cart__author">
                    {author}
                </div>
                <div className="product-cart__price">
                    {price}
                </div>
            </div>
        </div>
    )};

export default ProductCard;