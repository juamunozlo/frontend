import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    get: (state, { payload }) => {
      return payload;
    },
    getActiveProducts: (state, { payload }) => {
      //Obtener los productos activos
      return payload.filter((product) => product.deleted_at == null);
    },
    store: (state, { payload }) => {
      return [payload, ...state];
    },
    update: (state, { payload }) => {
      return state.map((product) =>
        product.id === payload.id ? payload : product
      );
    },
    changeStatus: (state, { payload }) => {
      //Cambiar estado
      console.log("payload: " + payload);
      return state.map((product) =>
        product.id === payload
          ? product.deleted_at
            ? { ...product, deleted_at: null }
            : { ...product, deleted_at: "deleted" }
          : product
      );
    },
  },
});

export const { store, get, update, changeStatus, getActiveProducts } =
  productsSlice.actions;
