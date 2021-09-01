/* eslint-disable import/no-cycle */
import { ThunkAction } from 'redux-thunk';
import { getAuthData } from './auth-reducer';
import { AppStateType } from './store';

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS';
const SET_APP_PAGE = 'posterhaus/app/SET_APP_PAGE';

export const APP_PAGES = {
  MAIN: 'MAIN',
  ARTISTS: 'ARTISTS',
  PRODUCT_LIST: 'PRODUCT_LIST',
  PRODUCT: 'PRODUCT',
};

const initialState = {
  initialized: false,
  appPage: APP_PAGES.MAIN,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case SET_APP_PAGE:
      return {
        ...state,
        appPage: action.appPage,
      };
    default:
      return state;
  }
};

export const setAppPage = (appPage) => ({
  type: SET_APP_PAGE,
  appPage,
});

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthData());

  Promise.all([promise])
    .then(() => dispatch(initializedSuccess()));
};

export default appReducer;
