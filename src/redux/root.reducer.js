import { combineReducers } from 'redux';

import userReducer from './user/User.reducer';
import cartReducer from './cart/Cart.reducer';
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export { rootReducer };
