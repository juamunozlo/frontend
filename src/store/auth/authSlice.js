import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    id: 0,
    name: "",
    role: 3,
    email: "",
  },
  reducers: {
    login: (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.role = payload.role;
      state.email = payload.email;
    },
    logout: (state, action) => {
      /*state.state = false; //true,
      state.id = 0;
      state.name = ""; //"jose daniel cruz casallas",
      state.role = ""; //"estudiante", // "administrador"
      state.message = "";
      state.token = "";*/
      return null;
    },
  },
});

export const { login, logout } = authSlice.actions;
