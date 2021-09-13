import React from 'react';
import PropTypes from 'prop-types';
import heartIcon from '../../assets/icons/heart_contur2.png';
import DropdownOptionsSelect from '../common/dropdowns/DropdownOptionsSelect';
import { SELECT_PAPER, SELECT_SIZE, SELECT_FRAME, SELECT_MATTE, PRODUCTS_TO_ORDER_REMOVE_ONE, PRODUCTS_TO_ORDER_ADD_ONE, PRODUCTS_TO_ORDER_ADD } from '../../redux/product-reducer';
import DropdownInfo from '../common/dropdowns/DropdownInfo';
import TagsField from '../common/TagsField';
import MediaLinks from '../common/media-links/MediaLinks';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductDetails = ({
    productPageData,
}) => {
    const dispatch = useDispatch();

    const {
        paperSelectOptions = [],
        sizeSelectOptions = [],
        frameSelectOptions = [],
        matteSelectOptions = [],
        productsToOrder = [],
    } = productPageData || {};

    const {
        id = null,
        productImage = null,
        author ='',
        name = '',
        descriptionFields = [],
        price: {
            count = '0.00',
            currency = 'EUR',
        },
        shippingFields = [],
        tags,
    } = productPageData.product || {};

    const productToOrder = productsToOrder.find((elem) => elem.id === id);
    const productToOrderCount = productToOrder ? productToOrder.count : 0;

    const [productCount, setProductCount] = useState(productToOrderCount);

    const onProductToOrderAdd = () => {
        dispatch({ type: PRODUCTS_TO_ORDER_ADD, id, count: productCount });
    };

    const onProductCountAdd = () => {
        setProductCount((state) => state + 1)
    }
    const onProductCountRemove = () => {
        setProductCount((state) => state === 0 ? 0 : state - 1)
    }

    return (
        <div className="product-details">
            <div className="product-image">
                <img className="product-image__representation" src={productImage} alt="product" />
                <img className="product-image__like" src={heartIcon} alt="like" />
            </div>
            <div className="product-info">
                <div className="product-info__author">
                    {author}
                </div>
                <h2 className="product-info__name">
                    {name}
                </h2>
                <div className="product-info__description">
                    {descriptionFields.map(({ label, id }) => (
                        <div key={id} className="product-info__description-field">
                            {label}
                        </div>
                    ))}
                </div>
                <div className="product-info__select-options">
                    <DropdownOptionsSelect
                        selectOptions={paperSelectOptions}
                        selectActionType={SELECT_PAPER}
                    />
                    <DropdownOptionsSelect
                        selectOptions={sizeSelectOptions}
                        selectActionType={SELECT_SIZE}
                    />
                    <DropdownOptionsSelect
                        selectOptions={frameSelectOptions}
                        selectActionType={SELECT_FRAME}
                    />
                    <DropdownOptionsSelect
                        selectOptions={matteSelectOptions}
                        selectActionType={SELECT_MATTE}
                    />
                </div>
                <div className="product-info__price">
                    <span className="product-info__price-units">{count}</span>
                    <span className="product-info__price-currency">{currency}</span>
                </div>
                <div className="product-info__frames">
                    Frame
                </div>
                <div className="product-info__count">
                    <div className="product-info__count-btn-minus" onClick={onProductCountRemove}>-</div>
                    <div>{productCount}</div>
                    <div className="product-info__count-btn-plus" onClick={onProductCountAdd}>+</div>
                </div>
                <button onClick={onProductToOrderAdd} className="product-info__add-btn">
                    Add to cart
                </button>
                <DropdownInfo
                    classes="product-info__drop-down"
                    title="Description"
                    descriptionFields={descriptionFields}
                />
                <DropdownInfo
                    classes="product-info__drop-down"
                    title="Shipping"
                    descriptionFields={shippingFields}
                />
                <TagsField tagsList={tags} />
                <MediaLinks />
            </div>
        </div>
    )};

ProductDetails.defaultProps = {
    productPageData: {},
}

ProductDetails.propTypes = {
    productPageData: PropTypes.object,
}

export default ProductDetails;