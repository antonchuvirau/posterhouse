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
import CustomSelectController from './controllers/CustomSelectController';

function renderComponentInElement(el) {
  const props = Object.assign({}, el.dataset);

  switch (props.type) {
    case 'custom-select':
      ReactDOM.render(<CustomSelectController />, el);
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
    default:
      break;
  }
}

document
  .querySelectorAll('.react')
  .forEach(renderComponentInElement)
