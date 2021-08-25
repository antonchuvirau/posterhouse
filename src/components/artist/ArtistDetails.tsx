import React from 'react';
import artistMock from '../../assets/images/artist-mock.png';

type PropsType = {};

const ArtistDetails: React.FC<PropsType> = () => (
    <div className="artist-details">
        <div className="artist-details__content">
            <h3 className="artist-details__name">
                ANDRÉ KERTÉSZ
            </h3>
            <div className="artist-details__country">
                Hungary
            </div>
            <div className="artist-details__description">
                {'Andre Kertesz was born on July 02, 1894 in Budapest, Hungary, Hungarian, is Photographer. Hungarian-born Andre Kertesz was a photographer who was one of the pioneers of the concept of photojournalism and photo essays. Even though he is today hailed as one of the most influential photographers of the 20th century, he personally felt that he never received the credit or the recognition he deserved. He was one of the first photographers who attempted not just to capture a moment with his camera, but to tell a story with his photographs.His interest in photography had its roots in his childhood which was spent in the countryside.'}
            </div>

            <div className="artist-details__expand-btn">
                Read more
            </div>
        </div>
        <div className="artist-details__image">
            <img src={artistMock} alt="artist" />
        </div>
    </div>
);

export default ArtistDetails;