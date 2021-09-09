import React from 'react';
import CardList from '../components/common/CardList';
import ManagePanel from '../components/common/manage-panel/ManagePanel';
import ButtonBrightWithArrow from '../components/common/buttons/ButtonBrightWithArrow';
import ProductCard from '../components/product/ProductCard';
import { SORTED_ITEMS } from '../components/common/manage-panel/useSortByDropdownStructure';

const HomePage = () => {
    const products = new Array(6).fill(0);
    const productsComponents = products.map((elem, index) => <ProductCard key={`product-card-${index}`}/>)

    return (
        <div className="home-page">
            <ManagePanel sortedItems={SORTED_ITEMS.PRODUCTS} />
            <div className="home-page__products-list">
                <div className="home-page__content">
                    <CardList cardComponents={productsComponents} />
                </div>
            </div>
            <div className="action-btn">
                <ButtonBrightWithArrow label="View all artwork" />
            </div>
        </div>
    )
};

export default HomePage;