import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import CustomAppBar from "./CustomAppBar";
import ProductCrud from "../admin/ProductCrud";
import Icommerce from "./Icommerce";
import { useSelector } from "react-redux";
import Admin from "../admin/Admin";
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

export default function Store({ handleOpenLogin, handleOpenSignUp }) {
  const auth = useSelector((state) => state.auth);
  console.log("auth: ", auth);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar
        handleOpenLogin={handleOpenLogin}
        handleOpenSignUp={handleOpenSignUp}
      />
      <main>
        <Container>
          {/* End hero unit */}
          <Grid sx={{ mt: 0 }} container spacing={4}>
            {auth && auth.role === 1 ? <Admin /> : <Icommerce />}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
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
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
