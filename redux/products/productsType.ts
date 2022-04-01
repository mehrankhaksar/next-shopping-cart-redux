export interface IPRODUCTSSTATE {
  loading: boolean;
  products: IPRODUCTITEM[];
  error: string;
}

export interface IPRODUCTITEM {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
  quantity?: number;
}
