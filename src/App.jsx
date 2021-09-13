import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import HomePage from './pages/HomePage';
import { useLocation } from 'react-router-dom';
import { setAppPage } from './redux/app-reducer';
import ArtistsPage from './pages/ArtistsPage';
import ArtistPage from './pages/ArtistPage';
import LoginPage from './pages/AuthorisationPage';
import WhishlistPage from './pages/WhishlistPage';
import CartInformationPage from './pages/CartInformationPage';
import ShippingPaymentPage from './pages/ShippingPaymentPage';
import FAQPage from './pages/FAQPage';

const APP_PAGES = {
  ARTISTS: '/artists.html',
  ARTIST: '/artist.html',
  PRODUCT_LIST: '/artworks.html',
  PRODUCT: '/artwork.html',
  LOGIN: '/explore.html',
  FAQ: '/faq.html',
  HOME: '/',
};

const App = () => {
  // const appPage = useSelector((state) => state.appPage);
  // const dispatch = useDispatch();
  // dispatch(setAppPage());
  // console.log("App page", appPage);

  const { pathname } = useLocation();

  let currentPage;

  switch (pathname) {
    case APP_PAGES.ARTISTS:
      currentPage = <ArtistsPage />;
      break;
    case APP_PAGES.ARTIST:
      currentPage = <ArtistPage />;
      break;
    case APP_PAGES.PRODUCT_LIST:
      currentPage = <ProductListPage />;
      break;
    case APP_PAGES.PRODUCT:
      currentPage = <ProductPage />;
      break;
    case APP_PAGES.HOME:
      currentPage = <HomePage />;
      break;
    case APP_PAGES.FAQ:
      currentPage = <FAQPage />;
      break;
    case APP_PAGES.LOGIN:
      currentPage = <LoginPage />;
      // currentPage = <WhishlistPage />;
      // currentPage = <CartInformationPage />;
      // currentPage = <ShippingPaymentPage />;
      break;
    default:
      currentPage = null;
      break;
  }

  return (
    <div className="App">
      {currentPage}
    </div>
  );
}

export default App;
