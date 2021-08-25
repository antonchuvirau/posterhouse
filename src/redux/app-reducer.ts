/* eslint-disable import/no-cycle */
import { ThunkAction } from 'redux-thunk';
import { getAuthData } from './auth-reducer';
import { AppStateType } from './store';

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

export type InitialStateType = typeof initialState;

type ActionTypes = InitializedSuccessActionType;

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS,
};

export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const initializeApp = (): ThunkType => (dispatch): any => {
  const promise = dispatch(getAuthData());

  Promise.all([promise])
    .then(() => dispatch(initializedSuccess()));
};

export default appReducer;
