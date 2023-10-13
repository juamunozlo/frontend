import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  addProduct,
  deleteAllProducts,
  deleteOneProduct,
} from "../../store/cart/thunks";
import { useDispatch } from "react-redux";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <Card sx={{ backgroundColor: "#e4c8b1", borderRadius: "10%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        src={product.image.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <strong>
          {formatterPeso.format(product.price)} X {product.quantity}
          {" = "}
          {formatterPeso.format(product.price * product.quantity)}
        </strong>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="success"
          sx={{ fontSize: "0.6em" }}
          onClick={() => {
            dispatch(addProduct(product));
          }}
        >
          Add another
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => {
            dispatch(deleteOneProduct(product));
          }}
          sx={{ fontSize: "0.6em" }}
        >
          Delete one
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => {
            dispatch(deleteAllProducts(product));
          }}
          sx={{ fontSize: "0.6em" }}
        >
          Delete all
        </Button>
      </CardActions>
    </Card>
  );
}
