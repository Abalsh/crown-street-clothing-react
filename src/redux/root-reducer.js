import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
// combine reducers is now an object which has our userReducer as a property.
export default combineReducers({
    user: userReducer
})