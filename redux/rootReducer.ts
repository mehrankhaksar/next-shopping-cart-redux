import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
