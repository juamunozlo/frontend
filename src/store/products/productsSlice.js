import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 10000,
      updated_at: "03/10/2023 17:44:00",
      order: 1,
    },
    {
      id: 2,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Doble Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 20000,
      updated_at: "03/10/2023 17:44:00",
      order: 2,
    },
    {
      id: 3,
      image: {
        url: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/a503e7eb-0166-4f30-86d6-d276dfcbd3bc/42447522-65cd-428e-ae12-14a2b3754be4_560_420.jpg",
      },
      name: "Triple Cangreburger",
      description: "La comida principal del Crustáceo Cascarudo",
      price: 30000,
      updated_at: "03/10/2023 17:44:00",
      order: 3,
    },
  ],
  reducers: {
    get: (state, { payload }) => {
      return payload;
    },
    getActiveProducts: (state, { payload }) => {
      //Obtener los productos activos
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

export const { store, get, update, remove } = productsSlice.actions;
