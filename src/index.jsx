import React from 'react';
import ReactDOM from 'react-dom';
import ManagePanelController from './controllers/ManagePanelController';
import './sass/main.scss'
import DropdownOptionsSelectController from './controllers/DropdownOptionsSelectController';
import DropdownInfoController from './controllers/DropdownInfoController';
import PaperTypesModalController from './controllers/PaperTypesModalController';
import DropdownInputFieldController from './controllers/DropdownInputFieldController';
import PhoneCustomInputController from './controllers/PhoneCustomInputController';
import StatusModalController from './controllers/StatusModalController';
import AddArtworkModalController from './controllers/AddArtworkModalController';
import LoginController from './controllers/LoginController';
import OrderDetailsModalController from './controllers/OrderDetailsModalController';
import EditOrderModalController from './controllers/EditOrderModalController';
import ShowHiddenValueBtnController from './controllers/ShowHiddenValueBtnController';
import ReadMoreBtnController from './controllers/ReadMoreBtnController';
import UploadImageController from './controllers/UploadImageController';
import UploadFileController from './controllers/UploadFileController';
import ExpandDashbordMenuController from './controllers/ExpandDashbordMenuController';

function renderComponentInElement(el) {
  const props = Object.assign({}, el.dataset);

  ExpandDashbordMenuController()

  switch (props.type) {
    case 'edit-order-modal':
      ReactDOM.render(<EditOrderModalController />, el);
      break;
    case 'status-modal':
      ReactDOM.render(<StatusModalController />, el);
      break;
    case 'login':
      ReactDOM.render(<LoginController />, el);
      break;
    case 'manage-panel':
      ReactDOM.render(<ManagePanelController />, el);
      break;
    case 'dropdown-options-select':
      ReactDOM.render(<DropdownOptionsSelectController />, el);
      break;
    case 'dropdown-input-field':
      ReactDOM.render(<DropdownInputFieldController />, el);
      break;
    case 'phone-custom-input':
      ReactDOM.render(<PhoneCustomInputController />, el);
      break;
    case 'dropdown-info':
      ReactDOM.render(<DropdownInfoController />, el);
      break;
    case 'order-details-modal':
      ReactDOM.render(<OrderDetailsModalController />, el);
      break;
    case 'paper-types-modal':
      ReactDOM.render(<PaperTypesModalController />, el);
      break;
    case 'add-artwork-modal':
      ReactDOM.render(<AddArtworkModalController />, el);
      break;
    case 'show-hidden-value-btn':
      ShowHiddenValueBtnController();
      break;
    case 'read-more-btn-controller':
      ReactDOM.render(<ReadMoreBtnController />, el);
      break;
    case 'upload-image-controller':
      UploadImageController();
      break;
    case 'upload-file-controller':
      UploadFileController();
      break;
    default:
      break;
  }
}


const addScripts = () => {
  console.log('scripts are reassigned')
  document
    .querySelectorAll('.react')
    .forEach(renderComponentInElement)
}

let observer;

const addDOMMutationListener = () => {
  const config = { attributes: true, childList: true, subtree: true };
  observer = new MutationObserver(addScripts);
  observer.observe(document, config);
}

window.addEventListener('load', () => {
  console.log('document loaded');
  addScripts();
  addDOMMutationListener();
});

window.addEventListener('unload', () => {
  observer.disconnect();
});

console.log('main script is uploaded')


