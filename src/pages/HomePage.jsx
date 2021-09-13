import React from 'react';
import CardList from '../components/common/CardList';
import ManagePanel from '../components/common/manage-panel/ManagePanel';
import ButtonBrightWithArrow from '../components/common/buttons/ButtonBrightWithArrow';
import ProductCard from '../components/product/ProductCard';
import { SORTED_ITEMS } from '../components/common/manage-panel/useSortByDropdownStructure';
import { useShallowEqualSelector } from '../redux/redux-utils/useShallowEqualSelector';

const HomePage = () => {
    const homePageData = useShallowEqualSelector((state) => ({
        productList: state.product.productList,
    }));

    const productsComponents = homePageData.productList
        .slice(0, 6)
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