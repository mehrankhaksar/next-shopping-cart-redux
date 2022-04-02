import { ICARTSTATE } from './cartType';
import { AnyAction } from 'redux';
import { sumProductItems } from '../../helper/functions';

const initialState: ICARTSTATE = {
  selectedProductItems: [],
  productItemsCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const cartReducer = (state = initialState, action: AnyAction): ICARTSTATE => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (
        !state.selectedProductItems.find(
          (item) => item.id === action.payload.id
        )
      ) {
        state.selectedProductItems.push({
          ...action.payload,
          quantity: 1,
        });
        return {
          ...state,
          ...sumProductItems(state.selectedProductItems),
        };
      }
    case 'INCREASE_PRODUCT':
      const iIdx = state.selectedProductItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProductItems[iIdx].quantity++;
      return {
        ...state,
        ...sumProductItems(state.selectedProductItems),
      };
    case 'DECREASE_PRODUCT':
      const jIdx = state.selectedProductItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.selectedProductItems[jIdx].quantity === 1) {
        const newSelectedProductItems = state.selectedProductItems.filter(
          (item) => item.id !== state.selectedProductItems[jIdx].id
        );
        return {
          ...state,
          selectedProductItems: [...newSelectedProductItems],
          ...sumProductItems(newSelectedProductItems),
        };
      } else {
        state.selectedProductItems[jIdx].quantity--;
      }
      return {
        ...state,
        ...sumProductItems(state.selectedProductItems),
      };
    case 'CLEAR_ALL_PRODUCTS':
      return {
        selectedProductItems: [],
        productItemsCounter: 0,
        totalPrice: 0,
        checkout: false,
      };
    case 'CHECKOUT':
      return {
        selectedProductItems: [],
        productItemsCounter: 0,
        totalPrice: 0,
        checkout: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
