import { Grid, IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProductRoutes() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth === null || auth.role === 3) {
      console.log("auth: " + auth);
      navigate("/");
    }
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
                <AddCircleOutlineRoundedIcon style={{ fontSize: 60 }}/>
              </IconButton>
            </Link>
          </Tooltip>
        </Grid>
      </Grid>

      <Routes>
        <Route path="/" element={<ProductTable />} />
        <Route path="/create" element={<ProductForm />} />
        <Route path="/edit/:id" element={<ProductForm edit={true} />} />
      </Routes>
    </>
  );
}
