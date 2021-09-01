import React from 'react';
import CardList from '../components/common/CardList';
import ManagePanel from '../components/common/ManagePanel';
import ArtistCard from '../components/artist/ArtistCard';
import ButtonBright from '../components/common/ButtonBright';

const ArtistsPage = () => {
    const artists = new Array(6).fill(0);

    const artistsComponents = artists.map((elem, index) => <ArtistCard key={`artist-card-${index}`}/>)

    return (
        <div className="artists-page">
            <ManagePanel hideLeftSubPanel />
            <div className="home-page__products-list">
                <div className="home-page__content">
                    <CardList cardComponents={artistsComponents} />
                </div>
            </div>
            <div className="action-btn">
                <ButtonBright small buttonLabel="Show more" />
            </div>
        </div>
    )
};

export default ArtistsPage;