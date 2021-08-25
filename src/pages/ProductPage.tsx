import React from 'react';
import AddressBar from '../components/common/AddressBar';
import ProductDetails from '../components/product/ProductDetails';
import ArtistDetails from '../components/artist/ArtistDetails';
import ProductList from '../components/product/ProductList';
import ButtonBright from '../components/common/ButtonBright';

type PropsType = {};

const ProductPage: React.FC<PropsType> = () => {
    const products = new Array(6).fill(0);

    return (
        <div className="product-page">
            <AddressBar address={'Home / Artwork / "Buy", Long Island University by André Kertész'} />
            <div className="product-page__product-details">
                <div className="product-page__content">
                    <ProductDetails />
                </div>
            </div>
            <div className="product-page__artist-details">
                <h2 className="product-page__title">
                    Meet the artist
                </h2>
                <div className="product-page__content">
                    <ArtistDetails />
                </div>
            </div>
            <div className="product-page__products-list">
                <div className="product-page__title">
                    MORE FROM THIS ARTIST
                </div>
                <div className="product-page__content">
                    <ProductList products={products} />
                </div>
            </div>
            <div className="action-btn">
                <ButtonBright buttonLabel="Show more" />
            </div>
        </div>
    )
};

export default ProductPage;