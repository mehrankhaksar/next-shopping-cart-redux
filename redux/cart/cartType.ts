import { IPRODUCTITEM } from '../products/productsType';

export interface ICARTSTATE {
  selectedProductItems: IPRODUCTITEM[];
  productItemsCounter: number;
  totalPrice: number;
  checkout: boolean;
}
