import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;