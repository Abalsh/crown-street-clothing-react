import {createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]; // thunk catches actions that are functions and putting 'dispatch' as a parameter for said functions.
if ( process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // spread middlewares spreads the methods in logger (which is saved as an array) to the root reducer.

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store); // persisted version of our store

export default {store, persistor };