import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../redux/store';
import Link from 'next/link';

const ProductDetails: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const productsState = useAppSelector((state) => state.products);
  const productItems = productsState.products;

  const selectedProductItem = productItems.filter(
    (item) => String(item.id) === id
  );

  return (
    <div
      style={{ minHeight: 'calc(100vh - 5rem)' }}
      className="w-full py-10 px-5 md:px-10"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col gap-10 bg-white p-5 border-2 rounded-md md:flex-row-reverse md:items-center md:p-10">
        <img
          src={selectedProductItem[0]?.image}
          alt="Product Details"
          className="w-full max-h-80 object-contain md:max-h-96"
        />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center text-blue-500 md:text-left lg:text-2xl">
            {selectedProductItem[0]?.title}
          </h3>
          <p className="text-sm font-medium text-justify">
            {selectedProductItem[0]?.description}
          </p>
          <div className="flex items-center gap-2 text-md font-medium">
            <span className="font-semibold text-orange-500">Category:</span>
            {selectedProductItem[0]?.category}
          </div>
          <div className="w-full flex justify-between items-center text-md text-white">
            <span className="bg-green-500 py-1.5 px-3 rounded-sm">
              {selectedProductItem[0]?.price}$
            </span>
            <Link href="/">
              <a className="bg-blue-500 py-1.5 px-3 rounded-sm transition-all duration-300 ease-out hover:text-blue-500 hover:bg-white">
                Back to Shop
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
