import React from 'react';
import ProductCart from './ProductCard';


type PropsType = {
    products: any[],
};

const ProductList: React.FC<PropsType> = ({ products }) => {
    const productsComponents = products.map((elem, index) => <ProductCart key={`product-card-${index}`}/>)

    return (
        <div className="product-list" >
            <div className="product-list__cards">
                {productsComponents}
            </div>
        </div>
    )
};

export default ProductList;