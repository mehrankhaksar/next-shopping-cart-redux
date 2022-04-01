import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const Navbar: FunctionComponent = () => {
  return (
    <div className="w-full flex items-center h-20 shadow-md">
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-5 xl:px-0">
        <Link href="/">
          <a className="text-xl font-semibold text-blue-500 tracking-wider lg:text-2xl">
            Products
          </a>
        </Link>
        <Link href="">
          <a className="w-10 h-10 flex justify-center items-center text-2xl rounded-full transition-all duration-300 ease-in-out hover:text-white  hover:bg-blue-500 lg:text-3xl">
            <i className="uil uil-shopping-cart-alt"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
