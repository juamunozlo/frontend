import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import ProductRoutes from "../../products/routes/ProductRoutes";
import CustomAppBar from "../components/CustomAppBar";
import LoginModal from "../../auth/LoginModal";
import SignUpModal from "../../auth/SignUpModal";
import Products from "../components/Products";
import Location from "../components/Location";
import LocationImage from "../components/LocationImage";
import Notifications from "../components/Notifications";
import Empty from "../components/Empty";
import NotificationsImage from "../components/NotificationsImage";
import Details from "../components/Details";
import UserRoutes from "../../users/routes/UserRoutes";
import OrderRoutes from "../../orders/routes/OrderRoutes";

//import Icommerce from "../components/Icommerce";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function HomeRoutes() {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    /*axios.get("/sanctum/csrf-cookie").then(() => {
      getUser();
    });*/
  }, []);

  const getUser = () => {
    /*axios
      .get("/api/user")
      .then((res) => {
        dispatch({ type: TYPES.GET_USER, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: TYPES.GET_USER, payload: null });
      });*/
  };

  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenSignUp(false);
  };
  const handleCloseLogin = () => setOpenLogin(false);

  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
    setOpenLogin(false);
  };
  const handleCloseSignUp = () => setOpenSignUp(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Container>
            {/* End hero unit */}
            <Grid
              sx={{ mt: 0 }}
              container
              spacing={2}
              style={{ height: "50%" }}
            >
              <Routes>
                <Route
                  path="/"
                  element={(!auth || auth.role === 3) && <Products/> && <Empty/>}
                />
                <Route path="/products/*" element={<ProductRoutes />} />
                <Route path="/users/*" element={<UserRoutes />} />
                <Route path="/orders/*" element={<OrderRoutes />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/place"
                  element={
                    <Grid container>
                      <Grid item xs={24} sm={12} md={6}>
                        <Location />
                      </Grid>
                      <Grid item xs={24} sm={12} md={6}>
                        <LocationImage />
                      </Grid>
                    </Grid>
                  }
                />
                <Route
                  path="/notifications"
                  element={
                    <Grid container>
                      <Grid item xs={24} sm={12} md={6}>
                        <Notifications />
                      </Grid>
                      <Grid item xs={24} sm={12} md={6}>
                        <NotificationsImage />
                      </Grid>
                    </Grid>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <Empty/>
                  }
                />
                <Route
                  path="/history"
                  element={
                    <Empty/>
                  }
                />
                <Route
                  path="/details"
                  element={<Details />}
                  /* element={
                    <Grid container>
                      <Grid item xs={24} sm={12} md={6}>
                        <Details />
                      </Grid>
                    </Grid>} */
                />
              </Routes>
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        {/* <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Gracias por visitar nuestra tienda.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box> */}
        {/* End footer */}
      </ThemeProvider>

      <LoginModal
        openLogin={openLogin}
        handleOpenSignUp={handleOpenSignUp}
        handleCloseLogin={handleCloseLogin}
        getUser={getUser}
      />
      <SignUpModal
        openSignUp={openSignUp}
        handleOpenLogin={handleOpenLogin}
        handleCloseSignUp={handleCloseSignUp}
        getUser={getUser}
      />
    </>
  );
}
