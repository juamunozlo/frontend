import { Grid, IconButton, Tooltip } from "@mui/material";
//import axios from "axios";
import { useEffect } from "react";
import ProductTable from "./ProductTable";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Route, Routes, Link } from "react-router-dom";
import ProductForm from "./ProductForm";

export default function ProductCrud() {
  useEffect(() => {
    /*axios
      .get("/api/products")
      .then((res) => {
        dispatch({
          type: TYPES.GET_PRODUCTS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });*/
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <h2>Products</h2>
        </Grid>
        <Grid item xs={6} textAlign="right" alignSelf="center">
          <Tooltip title="Create a product">
            <Link to="/products/create">
              <IconButton color="primary" aria-label="Create a product">
                <AddCircleOutlineRoundedIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
      <Route exact path="/" element={<ProductTable />} />
      <Route exact path="/products/create" element={<ProductForm />} />
      <Route
        exact
        path="/products/edit/:id"
        element={<ProductForm edit={true} />}
      />
    </>
  );
}
