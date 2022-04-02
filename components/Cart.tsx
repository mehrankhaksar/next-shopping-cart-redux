import React, { FunctionComponent } from 'react';
import {
  checkout,
  clearAllProducts,
  decreaseProduct,
  increaseProduct,
} from '../redux/cart/cartAction';
import { useAppDispatch, useAppSelector } from '../redux/store';

const Cart: FunctionComponent = () => {
  const cartState = useAppSelector((state) => state.cart);
  const { selectedProductItems, productItemsCounter, totalPrice } = cartState;
  const dispatch = useAppDispatch();

  return (
    <div style={{ minHeight: 'calc(100vh - 5rem)' }} className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 py-10 px-5 md:grid md:grid-cols-6">
        <ul className="space-y-5 md:col-span-4">
          {selectedProductItems.map((item) => (
            <li
              key={item.id}
              className="w-full grid grid-cols-2 gap-4 py-4 px-2 border-2 rounded-md md:grid-cols-3 md:px-4"
            >
              <img
                src={item.image}
                alt="Product"
                className="w-9/12 mx-auto max-h-52 object-contain"
              />
              <div className="w-full flex flex-col justify-evenly md:col-span-2 md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col font-medium">
                  <span className="text-orange-500">{item.category}</span>
                  <span className="text-green-500">{item.price}</span>
                </div>
                <span className="w-6 h-6 flex justify-center items-center text-xs text-white bg-orange-500 rounded-full md:w-7 md:h-7 md:text-base">
                  {item.quantity}
                </span>
                <div className="w-full flex items-center gap-5 text-lg md:max-w-max md:text-xl">
                  <button
                    className="w-7 h-7 flex justify-center items-center border-2 border-blue-500 rounded-lg"
                    onClick={() => dispatch(decreaseProduct(item))}
                  >
                    {item.quantity === 1 ? (
                      <i className="uil uil-trash-alt"></i>
                    ) : (
                      '-'
                    )}
                  </button>
                  <button
                    className="w-7 h-7 flex justify-center items-center border-2 border-blue-500 rounded-lg"
                    onClick={() => dispatch(increaseProduct(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="h-fit space-y-3 p-3 border-2 rounded-md md:col-span-2">
          <div className="flex items-center gap-1">
            <span className="font-medium">Total Products:</span>
            {productItemsCounter}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Total Payments:</span>
            {totalPrice}$
          </div>
          <div className="flex justify-between items-center text-sm font-medium lg:text-base">
            <button
              className="text-red-500"
              onClick={() => dispatch(clearAllProducts())}
            >
              Clear All
            </button>
            <button
              className="text-white bg-green-500 py-2 px-3 rounded-sm"
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
