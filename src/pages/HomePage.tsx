import React from 'react';
import ProductList from '../components/product/ProductList';
import ManagePanel from '../components/common/ManagePanel';
import ButtonBrightWithArrow from '../components/common/ButtonBrightWithArrow';

type PropsType = {};

const HomePage: React.FC<PropsType> = () => {
    const products = new Array(6).fill(0);

    return (
        <div className="home-page">
            <ManagePanel />
            <div className="home-page__products-list">
                <div className="home-page__content">
                    <ProductList products={products} />
                </div>
            </div>
            <div className="action-btn">
                <ButtonBrightWithArrow buttonLabel="View all artwork" />
            </div>
        </div>
    )
};

export default HomePage;