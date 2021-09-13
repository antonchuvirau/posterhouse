import React, { useEffect } from 'react';
import AddressBar from '../components/common/AddressBar';
import ProductDetails from '../components/product/ProductDetails';
import ArtistDetails from '../components/artist/ProductPageArtistDetails';
import CardList from '../components/common/CardList';
import ButtonBright from '../components/common/buttons/ButtonBright';
import ProductCard from '../components/product/ProductCard';
import { useDispatch } from 'react-redux';
import { fetchProduct, SET_PRODUCT_PAGE_PRODUCTS } from '../redux/product-reducer';
import { useShallowEqualSelector } from '../redux/redux-utils/useShallowEqualSelector';
import DropdownInfo from '../components/common/dropdowns/DropdownInfo';

const FAQPage = () => {
    const dispatch = useDispatch();

    const faqPageData = useShallowEqualSelector((state) => ({
        faqs: state.faq.faqs,
    }));

    // useEffect(() => {
    //     dispatch({
    //         type: SET_PRODUCT_PAGE_PRODUCTS,
    //         authorId: '2',
    //         page: 0,
    //         count: 3,
    //     });

    //     fetchProduct();
    // }, [dispatch])

    const faqsComponents = faqPageData.faqs.map(({
        id,
        title,
        descriptionFields,
    }) => (
        <DropdownInfo
            id={`faq-info-${id}`}
            key={id}
            title={title}
            descriptionFields={descriptionFields}
            buttonClasses="faq-page__drop-down-btn"
        />
    ))

    return (
        <div className="faq-page">
            <AddressBar address={'Home / FAQ'} />
            <div className="faq-page__container">
                {faqsComponents}
            </div>
        </div>
    )
};

export default FAQPage;