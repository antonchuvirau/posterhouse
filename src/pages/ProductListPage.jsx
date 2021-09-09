import React from 'react';
import CardList from '../components/common/CardList';
import ButtonBright from '../components/common/buttons/ButtonBright';
import ManagePanel from '../components/common/manage-panel/ManagePanel';
import ProductCard from '../components/product/ProductCard';

const ProductListPage = () => {
    const products = new Array(9).fill(0);
    const productsComponents = products.map((elem, index) => <ProductCard key={`product-card-${index}`}/>)

    return (
        <div className="product-list-page">
            <ManagePanel />
            <div className="product-list-page__content">
                <CardList cardComponents={productsComponents} />
            </div>
            <div className="action-btn">
                <ButtonBright label="Show more" />
            </div>
        </div>
    )
};

export default ProductListPage;