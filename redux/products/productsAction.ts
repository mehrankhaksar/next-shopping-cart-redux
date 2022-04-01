import axios from 'axios';
import { Dispatch } from 'redux';
import { IPRODUCTITEM } from './productsType';

const fetchProductsRequest = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST',
  };
};

const fetchProductsSuccess = (products: IPRODUCTITEM[]) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products,
  };
};

const fetchProductsFailure = (error: string) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
  };
};

export const fetchProducts = (): any => {
  return (dispatch: Dispatch): void => {
    dispatch(fetchProductsRequest());
    axios
      .get('https://fakestoreapi.com/products')
      .then((respone) => {
        const products = respone.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};
