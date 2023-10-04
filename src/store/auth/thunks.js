//import axios from "axios";
//import { show } from "../message/messageSlice";
import { login, logout } from "./authSlice";

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    /*await axios
      .post("/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          dispatch(login(res.data));
          dispatch(show(res.data.message));
          axios.defaults.headers.common[
            "Authorization"
          ] = `bearer ${res.data.token}`;
        } else {
          dispatch(show("Operación erronea."));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(show(err.response.data.message));
      });*/
  };
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch(logout());
  };
};

/*const handleLogout = () => {
  setAnchorElUser(null);
  axios
    .post("/logout")
    .then((res) => {
      console.log(res);
      logout();
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
    });
};*/
