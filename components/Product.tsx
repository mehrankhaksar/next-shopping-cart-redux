import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { shortenTitle } from '../helper/functions';
import { IPRODUCTITEMS } from '../redux/products/productsType';

type Props = {
  itemData: IPRODUCTITEMS;
};

const Product: FunctionComponent<Props> = ({ itemData }: Props) => {
  const { id, image, title, price } = itemData;

  return (
    <div className="space-y-2 p-5 border-2 rounded-md transition-all duration-75 ease-out hover:shadow-xl">
      <img
        src={image}
        alt="Product"
        className="w-9/12 mx-auto max-h-52 object-contain mb-8"
      />
      <h3 className="text-lg font-semibold text-blue-500 leading-6">{shortenTitle(title)}</h3>
      <span className="block text-md font-medium">{price}</span>
      <Link href={`/product/${id}`}>
        <a className="inline-block w-full text-lg font-medium text-center text-white tracking-wide bg-blue-500 py-2 rounded-sm">
          Details
        </a>
      </Link>
    </div>
  );
};

export default Product;
