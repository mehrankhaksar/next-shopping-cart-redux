export interface IPRODUCTSSTATE {
  loading: boolean;
  products: IPRODUCTITEMS[];
  error: string;
}

export interface IPRODUCTITEMS {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  description: string;
}
