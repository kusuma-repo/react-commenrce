import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/User.reducer';
import cartReducer from './cart/Cart.reducer';
import DirectoryReducer from './directory/Directory.reducer';
import collectionsReducer from './collections/Shop.reducer';
const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: DirectoryReducer,
  itemCollection: collectionsReducer,
});

export default persistReducer(persisConfig, rootReducer);
