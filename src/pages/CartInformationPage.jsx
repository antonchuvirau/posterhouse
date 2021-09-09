import React, { useState } from 'react';
import AddressBar from '../components/common/AddressBar';
import ButtonBright from '../components/common/buttons/ButtonBright';
import ButtonDark from '../components/common/buttons/ButtonDark';
import MediaLinks from '../components/common/media-links/MediaLinks';
import NoProductInList from '../components/product/NoProductInList';
import ProductToSellCard from '../components/product/ProductToSellCard';

const CartInformationPage = () => {
    const products = [{id: 1}, {id: 2}, {id: 3}];
    // const products = [];

    return (
        <div className="cart-information-product-list">
            <AddressBar address={'Home / Cart / Information'} />
            <section className="cart-information-product-list__container">
                <h3 className="cart-information-product-list__title">Shopping cart</h3>
                    {!products?.length && <NoProductInList title="No products in the cart" />}
                <div className="cart-information-product-list__content">
                    {
                        products.length !== 0 && (
                            <>
                                <div className="cart-information-product-list__cardslist">
                                    {products.map(({ id }) => <ProductToSellCard key={id} />)}
                                </div>
                                <div className="cart-information-product-list__subtotal">
                                    <div className="cart-information-product-list__subtotal-item">
                                        Subtotal
                                    </div>
                                    <div className="cart-information-product-list__subtotal-item">
                                        300.00 EUR
                                    </div>
                                </div>

                                <div className="cart-information-product-list__action-btns">
                                    <ButtonBright label="Continue shopping" classes="cart-information-product-list__action-button" />
                                    <ButtonDark label="Checkout" classes="cart-information-product-list__action-button" />
                                </div>
                            </>
                        )
                    }
                </div>
            </section>
        </div>
    )
};

export default CartInformationPage;