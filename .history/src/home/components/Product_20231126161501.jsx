import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { addProduct } from "../../store/cart/thunks";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

export default function Product({ product, width, height }) {
  const dispatch = useDispatch();
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  return (
    <Card
      sx={{
        maxWidth: width === 0 ? "none" : width,
        height: "100%",
        backgroundColor: "#e4c8b1",
        borderRadius: "10%",
      }}
    >
      <CardMedia
        component="img"
        alt={product.description}
        //height="140"
        //sx={{width:"50%"}}
        style={{ height: "54%", width:"100%"}}
        image={
          product.image ? product.image.url : "https://picsum.photos/200/300"
        }
      />
      <CardContent>
        <Typography fontFamily={'SpongeBob Font Condensed'} gutterBottom variant="h5" component="div">
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
        {/* <Button size="small" component={Link} to="/detalles" onClick={() => fetchProductDetails(product)}> */}
        <Button size="small" component={Link} to="/details" onClick={() => console.log(product)}>
          See details
        </Button>
      </CardActions>
    </Card>
  );
}
