import React from 'react';
import ReactDOM from 'react-dom';
import ManagePanelController from './controllers/ManagePanelController';
import './sass/main.scss'
import DropdownOptionsSelectController from './controllers/DropdownOptionsSelectController';
import DropdownInfoController from './controllers/DropdownInfoController';
import WishListSidePanelController from './controllers/WishListSidePanelController';
import PaperTypesModalController from './controllers/PaperTypesModalController';
import DropdownInputFieldController from './controllers/DropdownInputFieldController';
import PhoneCustomInputController from './controllers/PhoneCustomInputController';
import StatusModalController from './controllers/StatusModalController';
import AddArtworkModalController from './controllers/AddArtworkModalController';
import LoginController from './controllers/LoginController';
import TagDropDownController from './controllers/TagDropDownController';

function renderComponentInElement(el) {
  const props = Object.assign({}, el.dataset);

  switch (props.type) {
    case 'tag-dropdown':
      ReactDOM.render(<TagDropDownController />, el);
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
    case 'wish-list-side-panel':
      ReactDOM.render(<WishListSidePanelController />, el);
      break;
    case 'paper-types-modal':
      ReactDOM.render(<PaperTypesModalController />, el);
      break;
    case 'add-artwork-modal':
      ReactDOM.render(<AddArtworkModalController />, el);
      break;
    default:
      break;
  }
}

document
  .querySelectorAll('.react')
  .forEach(renderComponentInElement)
