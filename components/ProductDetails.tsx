import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { useAppSelector } from '../redux/store';

const ProductDetails: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const productsState = useAppSelector((state) => state.products);
  const productItems = productsState.products;

  const selectedProductItem = productItems.filter(
    (item) => String(item.id) === id
  );

  const { image, title, category, price, description } = selectedProductItem[0];

  return (
    <div
      style={{ minHeight: 'calc(100vh - 5rem)' }}
      className="w-full py-10 px-5 xl:px-0"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col gap-10 p-5 border-2 rounded-md md:flex-row-reverse md:items-center md:p-10">
        <img
          src={image}
          alt="Product Details"
          className="w-full max-h-80 object-contain md:max-h-96"
        />
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center text-blue-500 md:text-left lg:text-2xl">
            {title}
          </h3>
          <p className="text-md font-medium text-justify lg:text-lg">
            {description}
          </p>
          <div className="flex items-center gap-2 text-md lg:text-lg">
            <span className="font-semibold text-orange-500">Category:</span>
            {category}
          </div>
          <div className="w-full flex justify-between items-center text-md text-white lg:text-lg">
            <span className="bg-blue-500 py-1.5 px-3 rounded-sm">{price}</span>
            <Link href="/">
              <a className="bg-blue-500 py-2 px-3 rounded-sm transition-all duration-300 ease-out hover:text-blue-500 hover:bg-white">
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
