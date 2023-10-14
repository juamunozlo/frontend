import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: [
    {
      customer: {
        name: "Juan Camilo",
        phone: "1234235432",
        email: "juancml1913@gmail.com",
        address: "cll 56 #123 - 47 int 119",
      },
      order: {
        status: 1,
        products: [
          {
            name: "Doble Cangreburger",
            description: "La comida principal del Crustáceo Cascarudo",
            price: 20000,
            quantity: 1,
          },
          {
            name: "Triple Cangreburger",
            description: "La comida principal del Crustáceo Cascarudo",
            price: 30000,
            quantity: 1,
          },
        ],
      },
    },
    {
      customer: {
        name: "Sebastian garcia",
        phone: "42342342",
        email: "Sebastian@gmail.com",
        address: "cll 56 #123 - 47 int 119",
      },
      order: {
        status: 2,
        products: [
          {
            name: "Doble Cangreburger",
            description: "La comida principal del Crustáceo Cascarudo",
            price: 20000,
            quantity: 1,
          },
        ],
      },
    },
  ],
  reducers: {
    get: (state, { payload }) => {
      return payload;
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
      return state.map((product) => {
        product.id === payload
          ? product.deleted_at
            ? { ...product, deleted_at: null }
            : { ...product, deleted_at: "deleted" }
          : product;
      });
    },
  },
});

export const { store, get, update, changeStatus } = ordersSlice.actions;
