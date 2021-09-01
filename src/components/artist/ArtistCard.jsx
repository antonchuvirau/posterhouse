import React from 'react';
import artistMock from '../../assets/images/artist-card-mock.png';

const ArtistCard = () => (
    <div className="artist-card">
        <div className="artist-card__container">
            <div className="artist-card__image">
                <img src={artistMock} alt="product1" />
            </div>
            <div className="artist-card__name">
                <a href="./artist.html">Name Surname</a>
            </div>
            <div className="artist-card__location">
                Country
            </div>
        </div>
    </div>
);

export default ArtistCard;