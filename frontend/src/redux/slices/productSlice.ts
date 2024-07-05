import { Product } from "../../types/productTypes";

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string;
}
