import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // geting the localstorage object

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // we just want to persist the cart
}

// we don't persist user because firebase handles it

// combine reducers is now an object which has our userReducer as a property.
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

// exporting a modified ver. of our rootReducer, so that it has persistance capabilities.
export default persistReducer(persistConfig, rootReducer)