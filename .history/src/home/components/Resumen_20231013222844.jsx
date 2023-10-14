import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { colors } from "@mui/material";

export default function Resumen() {
  const cart = useSelector((state) => state.cart);
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <Card sx = {{backgroundColor: "#E3C7B1", width: "500px", height: "320px"}}>
      <CardContent>
        <Typography variant="body2">
          {cart.map((product) => (
            <div style={{backgroundColor: "#F5EDDC", width: "465px", height: "50px", verticalAlign:"Middle"}}>
            <p key={product.id}>
              {product.name} X {product.quantity}
              {" = "}
              {formatterPeso.format(product.price * product.quantity)}
            </p></div>
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
      <CardActions sx = {{}}>
        <div style={{backgroundColor:"#ED716D", justifyContent:"center"}}>
        <Button size="small" >Confirmar pedido</Button>
        </div>
      </CardActions>
    </Card>
  );
}
