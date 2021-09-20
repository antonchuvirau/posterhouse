import React from 'react';
import ReactDOM from 'react-dom';
import ManagePanelController from './controllers/ManagePanelController';
import './sass/main.scss'
import { Provider } from 'react-redux'
import store from './redux/store';
import { AppWithSidePanel } from './contexts/SidePanelContext';
import AuthorisationPage from './pages/AuthorisationPage';
import CartInformationPage from './pages/CartInformationPage';
import ShippingPaymentPage from './pages/ShippingPaymentPage';
import WhishlistPage from './pages/WhishlistPage';
import FAQPage from './pages/FAQPage';
import AddToWhishListBtn from './components/common/buttons/AddToWhishListBtn';
import DropdownOptionsSelectController from './components/common/dropdowns/DropdownOptionsSelectController';
import DropdownInfoController from './components/common/dropdowns/DropdownInfoController';
import WishListSidePanelController from './controllers/WishListSidePanelController';
import PaperTypesModalController from './controllers/PaperTypesModalController';



function renderComponentInElement(el) {
  const props = Object.assign({}, el.dataset);

  switch (props.type) {
    case 'manage-panel':
      ReactDOM.render(<ManagePanelController />, el);
      break;
    case 'add-to-whish-list-btn':
      ReactDOM.render(<AddToWhishListBtn />, el);
      break;
    case 'dropdown-options-select':
      ReactDOM.render(<DropdownOptionsSelectController />, el);
      break;
    case 'dropdown-info':
      ReactDOM.render(<DropdownInfoController />, el);
      break;
    case 'wish-list-side-panel':
      ReactDOM.render(<WishListSidePanelController />, el);
      break;
    case 'paper-types-modal':
      ReactDOM.render(<PaperTypesModalController />, el);
      break;
    case 'login':
      ReactDOM.render(
        <AppWithSidePanel>
          <AuthorisationPage />
        </AppWithSidePanel>,
        el
      );
      break;

    case 'cart':
      ReactDOM.render(
        <AppWithSidePanel>
          <CartInformationPage />
        </AppWithSidePanel>,
        el
      );
      break;

    case 'ship':
      ReactDOM.render(
        <Provider store={store}>
          <AppWithSidePanel>
            <ShippingPaymentPage />
          </AppWithSidePanel>
        </Provider>,
        el
      );
      break;

    case 'wishlist':
      ReactDOM.render(
        <Provider store={store}>
          <AppWithSidePanel>
            <WhishlistPage />
          </AppWithSidePanel>
        </Provider>,
        el
      );
      break;

    case 'faq':
      ReactDOM.render(
        <Provider store={store}>
          <AppWithSidePanel>
            <FAQPage />
          </AppWithSidePanel>
        </Provider>,
        el
      );
      break;

    default:
      break;
  }
}

document
  .querySelectorAll('.react')
  .forEach(renderComponentInElement)
