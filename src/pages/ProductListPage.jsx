import React from 'react';
import CardList from '../components/common/CardList';
import ButtonBright from '../components/common/buttons/ButtonBright';
import ManagePanel from '../components/common/manage-panel/ManagePanel';
import ProductCard from '../components/product/ProductCard';
import { useShallowEqualSelector } from '../redux/redux-utils/useShallowEqualSelector';

const ProductListPage = () => {
    const store = useShallowEqualSelector((state) => ({
        productList: state.product.productList,
    }));

    const productsComponents = store.productList
        .slice(0, 9)
        .map(({
            id,
            name,
            author,
            price,
            image,
        }) => (
            <ProductCard
                key={`product-card-${id}`}
                name={name}
                author={author}
                price={price}
                image={image}
                id={id}
            />
        ))

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