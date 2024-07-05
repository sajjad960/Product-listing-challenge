import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/productTypes";

export interface ProductState {
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  products: [],
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    getProductsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});
const { actions, reducer } = productSlice;
export const { getProductsSuccess, getProductsFailure } = actions;

export default reducer;
