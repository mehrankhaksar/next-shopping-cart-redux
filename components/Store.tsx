import React, { FunctionComponent, useEffect } from 'react';
import { fetchProducts } from '../redux/products/productsAction';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { v4 as v4uuid } from 'uuid';
import Product from './Product';

const Store: FunctionComponent = () => {
  const productsState = useAppSelector((state) => state.products);

  const productItems = productsState.products;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 5rem)' }} className="w-full py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 px-5">
        {productItems.map((itemData) => (
          <Product key={itemData.id} itemData={itemData} />
        ))}
      </div>
    </div>
  );
};

export default Store;
