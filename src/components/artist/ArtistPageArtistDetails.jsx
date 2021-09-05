import React from 'react';
import artistPageImageMock from '../../assets/images/artist-page_image.png';
import MediaLink from '../common/media-links/MediaLink';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';

const ArtistDetails = () => (
    <div className="artist-page-details">

        <div className="artist-page-details__container">
            <div className="artist-page-details__content">
                <h2 className="artist-page-details__name">
                    ANDRÉ KERTÉSZ
                </h2>
                <div className="artist-page-details__country">
                    Hungary
                </div>
                <div className="artist-page-details__description">
                    {'In 1925, André moved to Paris to fulfill his dream of pursuing a career as a photographer. After a short period of both artistic and personal struggle, his pioneering vision, brought him great success. His approach to the medium helped to define the shape of photojournalism in Europe, and subsequently America. During the next eleven years, Kertész built an extraordinary body of work, influenced by and influencing the many Artists with whom he interacted in Paris between the wars.'}
                </div>
                <div className="artist-page-details__social-networks">
                    <div className="artist-page-details__social-networks-title">
                        Social networks
                    </div>
                    <div className="media-links__list">
                        <MediaLink link="#" icon={instagramIcon} alt="instagram" />
                        <MediaLink link="#" icon={twitterIcon} alt="twitter" />
                    </div>
                </div>
            </div>

            <div className="artist-page-details__image">
                <img src={artistPageImageMock} alt="artist" />
            </div>
        </div>
    </div>
);

export default ArtistDetails;