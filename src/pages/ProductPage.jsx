import React, { useEffect } from 'react';
import AddressBar from '../components/common/AddressBar';
import ProductDetails from '../components/product/ProductDetails';
import ArtistDetails from '../components/artist/ProductPageArtistDetails';
import CardList from '../components/common/CardList';
import ButtonBright from '../components/common/buttons/ButtonBright';
import ProductCard from '../components/product/ProductCard';
import { useDispatch } from 'react-redux';
import { fetchProduct, SET_PRODUCT_PAGE_PRODUCTS } from '../redux/product-reducer';
import { useShallowEqualSelector } from '../redux/redux-utils/useShallowEqualSelector';

const ProductPage = () => {
    const dispatch = useDispatch();

    const productPageData = useShallowEqualSelector((state) => ({
        product: state.product.product,
        productPageProducts: state.product.productPageProducts,
        paperSelectOptions: state.product.paperSelectOptions,
        sizeSelectOptions: state.product.sizeSelectOptions,
        frameSelectOptions: state.product.frameSelectOptions,
        matteSelectOptions: state.product.matteSelectOptions,
        productsToOrder: state.product.productsToOrder,
    }));

    useEffect(() => {
        dispatch({
            type: SET_PRODUCT_PAGE_PRODUCTS,
            authorId: '2',
            page: 0,
            count: 3,
        });

        fetchProduct();
    }, [dispatch])

    const productsComponents = productPageData.productPageProducts.map(({
        id,
        name,
        author,
        price,
        image,
    }) => (
        <ProductCard
            key={`product-card-${id}`}
            id={id}
            name={name}
            author={author}
            price={price}
            image={image}
        />
    ))

    return (
        <div className="product-page">
            <AddressBar address={'Home / Artwork / "Buy", Long Island University by André Kertész'} />
            <div className="product-page__product-details">
                <div className="product-page__content">
                    <ProductDetails
                        productPageData={productPageData}
                    />
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
                    <CardList cardComponents={productsComponents} />
                </div>
            </div>
            <div className="action-btn">
                <ButtonBright label="Show more" />
            </div>
        </div>
    )
};

export default ProductPage;