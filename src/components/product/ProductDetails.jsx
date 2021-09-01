import React from 'react';
import heartIcon from '../../assets/icons/heart_contur2.png';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import productImage from '../../assets/images/Buy-mock.png';
import MediaLink from '../common/MediaLink';

const ProductDetails = () => (
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
            <div className="product-info__drop-down">Description</div>
            <div className="product-info__drop-down">Additional information</div>
            <div className="product-info_share">
                Share
                <div className="media-links">
                    <MediaLink link="#" icon={instagramIcon} alt="instagram" />
                    <MediaLink link="#" icon={twitterIcon} alt="twitter" />
                    <MediaLink link="#" icon={facebookIcon} alt="facebook" />
                </div>
            </div>
        </div>
    </div>
);

export default ProductDetails;