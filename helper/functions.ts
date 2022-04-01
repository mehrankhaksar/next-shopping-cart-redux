import { IPRODUCTITEM } from '../redux/products/productsType';

export const shortenTitle = (title: string): string => {
  const splitedTitle = title.split(' ');
  if (splitedTitle[1] === '-') {
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}...`;
    return newTitle;
  } else {
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}...`;
    return newTitle;
  }
};

export const isInCart = (selectedProductItems: IPRODUCTITEM[], id: number) => {
  let result = !!selectedProductItems.find((item) => item.id === id);
  return result;
};

export const sumProductItems = (selectedProductItems: IPRODUCTITEM[]) => {
  let productItemsCounter = selectedProductItems.reduce(
    (total: number, item: IPRODUCTITEM) => total + item.quantity,
    0
  );
  let totalPrice = parseInt(
    selectedProductItems
      .reduce(
        (total: number, item: IPRODUCTITEM) =>
          total + item.price * item.quantity,
        0
      )
      .toFixed(2)
  );

  return { productItemsCounter, totalPrice };
};

export const quantityCount = (
  selectedProductItems: IPRODUCTITEM[],
  id: number
) => {
  const productIdx = selectedProductItems.findIndex((item) => item.id === id);
  return selectedProductItems[productIdx].quantity;
};
