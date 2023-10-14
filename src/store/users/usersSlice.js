import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 1,
      name: "Juan Camilo Muñoz López",
      email: "juamunozlo@unal.edu.co",
      rol: 3,
      updated_at: "13/10/2023 17:44:00",
    },
    {
      id: 2,
      name: "Ana Lucia López",
      email: "ana@gmail.com",
      rol: 1,
      updated_at: "13/10/2023 17:44:00",
    },
    {
      id: 3,
      name: "Sebastian Gutierrez",
      email: "sebastian@gmail.com",
      rol: 2,
      updated_at: "13/10/2023 17:44:00",
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

export const { store, get, update, changeStatus } = usersSlice.actions;
