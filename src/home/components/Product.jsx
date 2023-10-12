import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addProduct } from "../../store/cart/thunks";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <Card sx={{ maxWidth: 345, minHeight: 300 }}>
      <CardMedia
        component="img"
        alt={product.description}
        height="140"
        //sx={{width:"50%"}}
        image={
          product.image ? product.image.url : "https://picsum.photos/200/300"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <strong>{formatterPeso.format(product.price)}</strong>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(addProduct(product))}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
