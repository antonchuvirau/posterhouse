import {
    applyMiddleware, combineReducers, createStore, compose,
  } from 'redux';
  import thunkMiddleWare from 'redux-thunk';
  import { reducer as formReducer } from 'redux-form';
  import authReducer from './auth-reducer';
  import appReducer from './app-reducer';

  export const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    form: formReducer,
  });

  type RootReducerType = typeof rootReducer;
  export type AppStateType = ReturnType<RootReducerType>;

  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

  export default store;
