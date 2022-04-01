import Link from 'next/link';
import React, { Dispatch, FunctionComponent } from 'react';
import { isInCart, quantityCount, shortenTitle } from '../helper/functions';
import {
  addProduct,
  decreaseProduct,
  increaseProduct,
} from '../redux/cart/cartAction';
import { IPRODUCTITEM } from '../redux/products/productsType';
import { useAppDispatch, useAppSelector } from '../redux/store';

type Props = {
  itemData: IPRODUCTITEM;
};

const Product: FunctionComponent<Props> = ({ itemData }: Props) => {
  const { id, image, title, price } = itemData;

  const cartState = useAppSelector((state) => state.cart);
  const { selectedProductItems } = cartState;
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-2 p-5 border-2 rounded-md transition-all duration-75 ease-out hover:shadow-xl">
      <img
        src={image}
        alt="Product"
        className="w-9/12 mx-auto max-h-52 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-500 leading-6">
        {shortenTitle(title)}
      </h3>
      <span className="text-md font-medium">{price}</span>
      <div className="w-full flex justify-between items-center text-sm font-medium text-white">
        <Link href={`/product/${id}`}>
          <a className="tracking-wide bg-blue-500 py-2 px-4 rounded-sm">
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
            <span className="w-8 h-8 flex justify-center items-center text-lg text-white bg-orange-500 rounded-full">
              {quantityCount(selectedProductItems, id)}
            </span>
            <button onClick={() => dispatch(increaseProduct(itemData))}>
              +
            </button>
          </div>
        ) : (
          <button
            className="font-semibold bg-orange-500 py-2 px-4 rounded-sm"
            onClick={() => dispatch(addProduct(itemData))}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
