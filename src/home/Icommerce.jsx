import { Grid } from "@mui/material";
import { useEffect } from "react";
import Product from "./Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import ResetPassword from "../auth/ResetPassword";
import { useSelector } from "react-redux";

export default function Icommerce() {
  const products = useSelector((state) => state.products);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  useEffect(() => {
    //Consultar los productos
    /*axios
      .get("/api/products")
      .then((res) => {
        dispatch({ type: TYPES.GET_ACTIVE_PRODUCTS, payload: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });*/
  }, []);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Product formatterPeso={formatterPeso} product={product} />
            </Grid>
          ))}
        />
        <Route
          exact
          path="/cart"
          element={<Cart formatterPeso={formatterPeso} />}
        />
        <Route exact path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
