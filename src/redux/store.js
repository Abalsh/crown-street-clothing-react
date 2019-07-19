import {createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // spread middlewares spreads the methods in logger (which is saved as an array) to the root reducer.

export const persistor = persistStore(store); // persisted version of our store

export default {store, persistor };