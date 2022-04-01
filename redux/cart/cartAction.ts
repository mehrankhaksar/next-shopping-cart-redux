import { IPRODUCTITEM } from '../products/productsType';

export const addProduct = (product: IPRODUCTITEM) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const increaseProduct = (product: IPRODUCTITEM) => {
  return {
    type: 'INCREASE_PRODUCT',
    payload: product,
  };
};

export const decreaseProduct = (product: IPRODUCTITEM) => {
  return {
    type: 'DECREASE_PRODUCT',
    payload: product,
  };
};

export const clearAllProducts = () => {
  return {
    type: 'CLEAR_ALL_PRODUCTS',
  };
};

export const checkout = () => {
  return {
    type: 'CHECKOUT',
  };
};
