import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import Resumen from "./Resumen";
import { cleanCart } from "../store/cart/thunks";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({ formatterPeso }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <Grid item md={12} textAlign="center">
        <Link to="/">
          <Button size="medium">Go back store</Button>
        </Link>
        <Button size="medium" onClick={() => dispatch(cleanCart())}>
          Clean Cart
        </Button>
      </Grid>
      <Grid item md={9}>
        <Grid container sx={{ mt: 0 }}>
          {cart.map((product) => (
            <Grid sx={{ p: 1 }} item key={product.id} xs={12} sm={6} md={4}>
              <CartProduct formatterPeso={formatterPeso} product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={3}>
        <Resumen formatterPeso={formatterPeso} />
      </Grid>
    </>
  );
}
