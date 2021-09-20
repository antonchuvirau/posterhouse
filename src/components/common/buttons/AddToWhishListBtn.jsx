
import React, { useCallback, useEffect, useRef } from 'react';

const AddToWhishListBtn = () => {
    const productCardLikeBtns = useRef(null);

    const onProductCardLikeBtnClick = useCallback((e) => {
        e.currentTarget.classList.toggle('product-card__like-button--state_inactive');
        e.currentTarget.classList.toggle('product-card__like-button--state_active');
    }, []);

    useEffect(() => {
        productCardLikeBtns.current = document.getElementsByClassName('product-card__like-button');

        for (let i = 0; i < productCardLikeBtns.current.length; i += 1) {
            productCardLikeBtns.current[i].addEventListener('click', onProductCardLikeBtnClick);
        }

        return () => {
            for (let i = 0; i < productCardLikeBtns.current.length; i += 1) {
                productCardLikeBtns.current[i].removeEventListener('click', onProductCardLikeBtnClick);
            }
        };
    }, [onProductCardLikeBtnClick]);

    return <div />;
};

export default AddToWhishListBtn;