import React, { useState } from 'react';
import AddressBar from '../components/common/AddressBar';
import Login from '../components/authorisation/Login';
import CreateAccount from '../components/authorisation/CreateAccount';
import AuthorisationTabs from '../components/authorisation/AuthorisationTabs';
import MediaLinks from '../components/common/media-links/MediaLinks';
import ProductToSellMock from '../assets/images/Product-to-sell-mock.png'
import Close from '../assets/icons/close.svg';
import ProductToSellCard from '../components/product/ProductToSellCard';

const WhishlistPage = () => {
    return (
        <div className="whishlist">
            <AddressBar address={'Home / Wishlist'} />
            <section className="whishlist__container">
                <h3 className="whishlist__title">Wishlist</h3>
                <div className="whishlist__cardslist">
                    <ProductToSellCard />
                    <ProductToSellCard />
                    <ProductToSellCard />
                </div>
                <MediaLinks />
            </section>
        </div>
    )
};

export default WhishlistPage;