import { Grid, IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

export default function UserRoutes() {
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
          <h2>Users</h2>
        </Grid>
        <Grid item xs={6} textAlign="right" alignSelf="center">
          <Tooltip title="Create a user">
            <Link to="/users/create">
              <IconButton color="primary" aria-label="Create a user">
                <AddCircleOutlineRoundedIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Grid>
      </Grid>

      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm edit={true} />} />
      </Routes>
    </>
  );
}
