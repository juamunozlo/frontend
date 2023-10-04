import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function Resumen({ formatterPeso }) {
  const cart = useSelector((state) => state.cart);
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Payment Summary
        </Typography>
        <Typography variant="body2">
          {cart.map((product) => (
            <p key={product.id}>
              {product.name} X {product.quantity}
              {" = "}
              {formatterPeso.format(product.price * product.quantity)}
            </p>
          ))}
          <br />
          <strong>
            Total:{" "}
            {formatterPeso.format(
              cart.reduce(
                (total, product) => product.quantity * product.price + total,
                0
              )
            )}
          </strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy now</Button>
      </CardActions>
    </Card>
  );
}
