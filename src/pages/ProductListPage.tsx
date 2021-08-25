import React from 'react';
import ProductList from '../components/product/ProductList';
import ButtonBright from '../components/common/ButtonBright';
import ManagePanel from '../components/common/ManagePanel';

type PropsType = {};

const ProductListPage: React.FC<PropsType> = () => {
    const products = new Array(9).fill(0);

    return (
        <div className="product-list-page">
            <ManagePanel />
            <div className="product-list-page__content">
                <ProductList products={products} />
            </div>
            <div className="action-btn">
                <ButtonBright buttonLabel="Show more" />
            </div>
        </div>
    )
};

export default ProductListPage;