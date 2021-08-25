import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { authAPI, usersAPI } from '../api/api';
import { AppStateType } from './store';

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';

const initialState = {
  userName: null as string | null,
  userId: null as number | null,
  email: null as string | null,
  isAuthorised: false as boolean,
};

export type InitialStateType = typeof initialState;

type ActionTypes = SetAuthDataActionType;

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
      };
    default:
      return state;
  }
};

type SetAuthDataActionTypeUserDataType = {
  userName: string | null,
  userId: number | null,
  email: string | null,
  isAuthorised: boolean,
};

export type SetAuthDataActionType = {
  type: typeof SET_USER_DATA,
  userData: SetAuthDataActionTypeUserDataType,
};

export const setAuthData = (
  userName: string | null,
  userId: number | null,
  email: string | null,
  isAuthorised: boolean,
): SetAuthDataActionType => ({
  type: SET_USER_DATA,
  userData: {
    userName, userId, email, isAuthorised,
  },
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const getAuthData = (): ThunkType => async (dispatch): Promise<void> => {
  const data = await usersAPI.getUserAuthData();

  if (data.resultCode === 0) {
    const { login, id, email } = data.data;
    dispatch(setAuthData(login, id, email, true));
  }
};

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
  };

export const loginUser = (
  formData: FormDataType,
): ThunkType => async (dispatch: any): Promise<void> => {
  const { email, password, rememberMe } = formData;
  const data = await authAPI.logIn(email, password, rememberMe);

  if (data.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));// action-creator --> стопаем сабмит формы
  }
};

export const logOut = (): ThunkType => async (dispatch): Promise<void> => {
  const data = await authAPI.logOut();

  if (data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};

export default authReducer;
