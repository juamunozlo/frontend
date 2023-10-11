import { Grid } from "@mui/material";
import { useEffect } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products);

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
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={3}>
          <Product product={product} />
        </Grid>
      ))}
    </>
  );
}
