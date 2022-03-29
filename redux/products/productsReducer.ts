import { AnyAction } from 'redux';
import { IPRODUCTSSTATE } from './productsType';

const initialState: IPRODUCTSSTATE = {
  loading: false,
  products: [],
  error: '',
};

const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
