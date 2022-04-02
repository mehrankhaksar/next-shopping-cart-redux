import React, { FunctionComponent } from 'react';
import { useAppSelector } from '../redux/store';
import Link from 'next/link';

const Navbar: FunctionComponent = () => {
  const cartState = useAppSelector((state) => state.cart);
  const { productItemsCounter } = cartState;

  return (
    <div className="w-full h-20 flex items-center sticky top-0 bg-white px-5 shadow-md md:px-10">
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
        <Link href="/">
          <a className="text-lg font-semibold uppercase text-blue-500">
            Products
          </a>
        </Link>
        <Link href="/cart">
          <a className="w-12 h-12 flex justify-center items-center relative text-3xl rounded-full transition-all duration-300 ease-in-out hover:text-white  hover:bg-blue-500">
            <i className="uil uil-shopping-cart-alt"></i>
            <span className="w-5 h-5 flex justify-center items-center absolute top-0 right-1 text-xs text-white bg-orange-500 rounded-full">
              {productItemsCounter}
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
