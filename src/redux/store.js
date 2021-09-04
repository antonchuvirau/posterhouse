import {
    applyMiddleware, combineReducers, createStore, compose,
  } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import productReducer from './product-reducer';

  export const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    // app: appReducer,
  });

  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    // composeEnhancers(applyMiddleware(thunkMiddleWare)),
  );

  export default store;
