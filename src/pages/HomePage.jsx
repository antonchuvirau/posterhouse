import React from 'react';
import CardList from '../components/common/CardList';
import ManagePanel from '../components/common/ManagePanel';
import ButtonBrightWithArrow from '../components/common/ButtonBrightWithArrow';
import ProductCard from '../components/product/ProductCard';

const HomePage = () => {
    const products = new Array(6).fill(0);
    const productsComponents = products.map((elem, index) => <ProductCard key={`product-card-${index}`}/>)

    return (
        <div className="home-page">
            <ManagePanel />
            <div className="home-page__products-list">
                <div className="home-page__content">
                    <CardList cardComponents={productsComponents} />
                </div>
            </div>
            <div className="action-btn">
                <ButtonBrightWithArrow buttonLabel="View all artwork" />
            </div>
        </div>
    )
};

export default HomePage;