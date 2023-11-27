import { Grid } from "@mui/material";
import { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductActive } from "../../store/products/thunks";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    //Consultar los productos
    dispatch(getProductActive());
  }, []);

  const mainProduct = products.find((product) => product.order === 1);

  return (
    products.length > 0 && (
      <>
        <Grid item container xs={12} sm={12} md={6} style={{ mt: 0 }}>
          <Grid item xs={12} sm={12} md={12}>
            <Product product={mainProduct} width={0} height={200} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          xs={12}
          sm={12}
          md={6}
          style={{ mt: 0 }}
        >
          {products.map(
            (product, index) =>
              index > 0 &&
              index < 5 && (
                <Grid item xs={12} sm={6} md={6}>
                  <Product product={product} width={345} height={200} />
                </Grid>
              )
          )}
        </Grid>

        {products.map(
          (product, index) =>
            index >= 5 && (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <Product product={product} width={345} height={200} />
              </Grid>
            )
        )}
      </>
    )
  );
}
