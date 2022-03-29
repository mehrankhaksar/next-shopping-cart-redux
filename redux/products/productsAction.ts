import axios from 'axios';

const fetchProductsRequest = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST',
  };
};

const fetchProductsSuccess = (products: JSX.Element[]) => {
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

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get('https://fakestoreapi.com')
      .then((respone) => {
        const products = respone.data;
        fetchProductsSuccess(products);
      })
      .catch((error) => {
        const errorMsg = error.message;
        fetchProductsFailure(errorMsg);
      });
  };
};
