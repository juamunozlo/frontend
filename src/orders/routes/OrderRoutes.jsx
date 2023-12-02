import { Grid, IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import OrderTable from "../components/OrderTable";

export default function OrderRoutes() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.id == 0 || auth.role === 3) {
      console.log("auth: " + auth);
      navigate("/");
    }
  }, []);
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <h2>Orders</h2>
        </Grid>
      </Grid>

      <Routes>
        <Route path="/" element={<OrderTable />} />
      </Routes>
    </>
  );
}
