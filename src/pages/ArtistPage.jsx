import React from 'react';
import AddressBar from '../components/common/AddressBar';
import ArtistPageArtistDetails from '../components/artist/ArtistPageArtistDetails';
import CardList from '../components/common/CardList';
import ButtonBright from '../components/common/buttons/ButtonBright';
import ProductCard from '../components/product/ProductCard';
import ArtistPageBiography from '../components/artist/ArtistPageBiography';
import ManagePanel from '../components/common/manage-panel/ManagePanel';

const ArtistPage = () => {
    const products = new Array(6).fill(0);
    const productsComponents = products.map((elem, index) => <ProductCard key={`product-card-${index}`}/>)

    return (
        <div className="artist-page">
            <AddressBar address={'Home / Artist / ANDRÉ KERTÉSZ'} />
            <ArtistPageArtistDetails />
            <ArtistPageBiography />
            <div className="artist-page__products-list">
                <div className="artist-page__title">
                    ARTWORK
                </div>
                <div className="artist-page__content">
                    <ManagePanel />
                    <CardList cardComponents={productsComponents} />
                </div>
            </div>
            <div className="action-btn">
                <ButtonBright small buttonLabel="Show more" />
            </div>
        </div>
    )
};

export default ArtistPage;