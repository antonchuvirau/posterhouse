import React from 'react';
import { useShallowEqualSelector } from '../../redux/redux-utils/useShallowEqualSelector';
import heartIcon from '../../assets/icons/heart_contur2.png';
import productImage from '../../assets/images/Buy-mock.png';
import DropdownOptionsSelect from '../common/dropdowns/DropdownOptionsSelect';
import { SELECT_PAPER, SELECT_SIZE, SELECT_FRAME, SELECT_MATTE } from '../../redux/product-reducer';
import DropdownInfo from '../common/dropdowns/DropdownInfo';
import TagsField from '../common/TagsField';
import MediaLinks from '../common/media-links/MediaLinks';

const tagsList = [
    {
        label: 'Interior',
        id: 'Interior',
    },
    {
        label: 'Kitchen',
        id: 'Kitchen',
    },
    {
        label: 'Travel',
        id: 'Travel',
    },
    {
        label: 'Bathroom',
        id: 'Bathroom',
    },
    {
        label: 'Minimal',
        id: 'Minimal',
    },
    {
        label: 'Interior',
        id: '1',
    },
    {
        label: 'Interior',
        id: '2',
    },
    {
        label: 'Interior',
        id: '3',
    },
    {
        label: 'Interior',
        id: '4',
    },
];

const ProductDetails = () => {
    const paperSelectOptions = useShallowEqualSelector((state) => state.product.paperSelectOptions);
    const sizeSelectOptions = useShallowEqualSelector((state) => state.product.sizeSelectOptions);
    const frameSelectOptions = useShallowEqualSelector((state) => state.product.frameSelectOptions);
    const matteSelectOptions = useShallowEqualSelector((state) => state.product.matteSelectOptions);

    return (
        <div className="product-details">
            <div className="product-image">
                <img className="product-image__representation" src={productImage} alt="product" />
                <img className="product-image__like" src={heartIcon} alt="like" />
            </div>
            <div className="product-info">
                <div className="product-info__author">
                    ANDRÉ KERTÉSZ
                </div>
                <h2 className="product-info__name">
                    "Buy", Long Island University
                </h2>
                <div className="product-info__description">
                    {'1962\n Gelatin silver print \n Estate stamp, in ink, au verso \n Estate # 6-0209-029-2-1-17 G \n Unframed \n Printed circa 1980 \n Provenance: Direct from the Estate of André Kertész, New York'}
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
                    <span className="product-info__price-units">100.00</span>
                    <span className="product-info__price-currency">EUR</span>
                </div>
                <div className="product-info__frames">
                    Frame
                </div>
                <div className="product-info__amount">
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </div>
                <button className="product-info__add-btn">
                    Add to cart
                </button>
                <DropdownInfo
                    classes="product-info__drop-down"
                    title="Description"
                    description="1962 Gelatin silver print Estate stamp, in ink, au verso Estate # 6-0209-029-2-1-17 G Unframed Printed circa 1980 Provenance: Direct from the Estate of André Kertész, New York"
                />
                <DropdownInfo
                    classes="product-info__drop-down"
                    title="Shipping"
                    description="Free shipping in North America for any order over $150 USD."
                />
                <TagsField tagsList={tagsList} />
                <MediaLinks />
            </div>
        </div>
    )};

export default ProductDetails;