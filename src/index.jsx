import React from 'react';
import ReactDOM from 'react-dom';
import ManagePanel from './components/common/manage-panel/ManagePanel';
import './sass/main.scss'
// import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import { BrowserRouter as Router } from "react-router-dom";
import { AppWithSidePanel } from './contexts/SidePanelContext';
import DropdownOptionsSelect from './components/common/dropdowns/DropdownOptionsSelect';
import DropdownInfo from './components/common/dropdowns/DropdownInfo';
import AuthorisationPage from './pages/AuthorisationPage';
import CartInformationPage from './pages/CartInformationPage';
import ShippingPaymentPage from './pages/ShippingPaymentPage';
import WhishlistPage from './pages/WhishlistPage';
import FAQPage from './pages/FAQPage';



// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <AppWithSidePanel>
//           <App />
//         </AppWithSidePanel>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );





function renderComponentInElement(el) {
  const props = Object.assign({}, el.dataset);

  switch (props.type) {
    case 'manage-panel':
      ReactDOM.render(
        <AppWithSidePanel>
          <ManagePanel hideLeftSubPanel={props.hideleft} {...props} />
        </AppWithSidePanel>,
        el
      );
      break;
    case 'dropdown-options-select':
      ReactDOM.render(
        <Provider store={store}>
          <AppWithSidePanel>
            <DropdownOptionsSelect {...props} />
          </AppWithSidePanel>
        </Provider>,
        el
      );
      break;
    case 'dropdown-info':
      ReactDOM.render(
        <AppWithSidePanel>
          <DropdownInfo {...props}
            classes="product-info__drop-down"
            title="Shipping"
            descriptionFields={[]}
          />
        </AppWithSidePanel>,
        el
      );
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

// const onProductLikeButtonClick = (element) => {
//   element.addEventListener('click', (event) => {
//     event.currentTarget.classList.toggle('product-card__like-button--state_active')
//   })
// };

document
  .querySelectorAll('.react')
  .forEach(renderComponentInElement)


// document
//   .querySelectorAll('.product-card__like-button')
//   .forEach()

// document
//   .getElementById('')

{/* <div class="side-panel">
<div class="side-panel__backdrop" />

.side-panel__backdrop--state_invisible {
  .side-panel--state_invisible {


document
  .getElementById('side-panel-filters')
  .addEventListener('click', ) */}
