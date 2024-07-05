export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type GetAllProductsResponce = {
  status: string;
  products: Product[];
};
