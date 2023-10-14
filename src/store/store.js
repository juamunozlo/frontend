import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { productsSlice } from "./products/productsSlice";
import { cartSlice } from "./cart/cartSlice";
import { usersSlice } from "./users/usersSlice";
import { ordersSlice } from "./orders/ordersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    users: usersSlice.reducer,
    orders: ordersSlice.reducer,
  },
});
