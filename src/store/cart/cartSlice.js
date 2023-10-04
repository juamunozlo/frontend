import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      let cartProduct = state.find((product) => product.id === payload.id);

      return cartProduct
        ? state.map((product) =>
            product.id === cartProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : [...state, { ...payload, quantity: 1 }];
    },
    deleteOne: (state, { payload }) => {
      return state.find((product) => product.id === payload.id).quantity === 1
        ? state.filter((product) => product.id !== payload.id)
        : state.map((product) =>
            product.id === payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          );
    },
    deleteAll: (state, { payload }) => {
      return state.filter((product) => product.id !== payload.id);
    },
    clean: (state, action) => {
      return [];
    },
  },
});

export const { add, deleteOne, deleteAll, clean } = cartSlice.actions;
