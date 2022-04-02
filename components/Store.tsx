import React, { FunctionComponent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProducts } from '../redux/products/productsAction';
import Product from './Product';

const Store: FunctionComponent = () => {
  const productsState = useAppSelector((state) => state.products);

  const productItems = productsState.products;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 5rem)' }} className="w-full">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 gap-8 py-10 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-4">
        {productItems.map((itemData) => (
          <Product key={itemData.id} itemData={itemData} />
        ))}
      </div>
    </div>
  );
};

export default Store;
