import React, { Dispatch, FunctionComponent } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import {
  addProduct,
  decreaseProduct,
  increaseProduct,
} from '../redux/cart/cartAction';
import { IPRODUCTITEM } from '../redux/products/productsType';
import Link from 'next/link';

import { isInCart, quantityCount, shortenTitle } from '../helper/functions';

type Props = {
  itemData: IPRODUCTITEM;
};

const Product: FunctionComponent<Props> = ({ itemData }: Props) => {
  const { id, image, title, price } = itemData;

  const cartState = useAppSelector((state) => state.cart);
  const { selectedProductItems } = cartState;

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-6 bg-white p-5 border-2 rounded-md transition-all duration-150 ease-out hover:shadow-xl">
      <img
        src={image}
        alt="Product"
        className="w-9/12 max-h-52 m-auto object-contain"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-blue-500">
          {shortenTitle(title)}
        </h3>
        <span className="text-sm font-medium">{price}$</span>
        <div className="w-full flex justify-between items-center text-white">
          <Link href={`/product/${id}`}>
            <a className="text-sm tracking-wide bg-blue-500 py-2 px-3 rounded-sm xl:text-xs">
              Details
            </a>
          </Link>
          {isInCart(selectedProductItems, id) ? (
            <div className="flex items-center gap-4 text-2xl text-black">
              <button onClick={() => dispatch(decreaseProduct(itemData))}>
                {quantityCount(selectedProductItems, id) === 1 ? (
                  <i className="uil uil-trash-alt"></i>
                ) : (
                  '-'
                )}
              </button>
              <span className="w-7 h-7 flex justify-center items-center text-base text-white bg-orange-500 rounded-full">
                {quantityCount(selectedProductItems, id)}
              </span>
              <button onClick={() => dispatch(increaseProduct(itemData))}>
                +
              </button>
            </div>
          ) : (
            <button
              className="text-sm font-medium uppercase bg-orange-500 py-2 px-3 rounded-sm xl:text-xs"
              onClick={() => dispatch(addProduct(itemData))}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
