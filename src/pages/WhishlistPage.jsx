import React, { useState } from 'react';
import AddressBar from '../components/common/AddressBar';
import MediaLinks from '../components/common/media-links/MediaLinks';
import NoProductInList from '../components/product/NoProductInList';
import ProductToSellCard from '../components/product/ProductToSellCard';
import heart__grey from '../assets/icons/heart__grey.png';

const WhishlistPage = () => {
    const products = [{id: 1}, {id: 2}, {id: 3}];
    // const products = [];

    const noProductsInListDescription = (
        <div className="no-products-in-list__description">
            <span>Click the </span>
            <img src={heart__grey} alt="like-button" />
            <span> icon to add products</span>
        </div>
    );

    return (
            <section className="whishlist__container">
                <h3 className="whishlist__title">Wishlist</h3>
                {!products?.length && <NoProductInList
                    noProductsInListDescription={noProductsInListDescription}
                    title="No products in your wishlist"
                />}
                {
                    products.length && <>
                        <div className="whishlist__cardslist">
                            {products.map(({ id }) => <ProductToSellCard key={id} />)}
                        </div>
                        <MediaLinks />
                    </>
                }
            </section>
    )
};

export default WhishlistPage;