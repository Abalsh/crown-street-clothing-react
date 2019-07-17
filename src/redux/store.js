import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // spread middlewares spreads the methods in logger (which is saved as an array) to the root reducer.


export default store;