import { Grid, IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { Link } from "react-router-dom";

export default function UserCrud() {
  return (
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
  );
}
