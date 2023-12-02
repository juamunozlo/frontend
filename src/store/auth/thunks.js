//import axios from "axios";
//import { show } from "../message/messageSlice";
import axios from "axios";
import { login, logout } from "./authSlice";

export const signIn = (form) => {
  return async (dispatch) => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:8000";
    axios
      .post("/login", form)
      .then((res) => {
        //getUserApi();
        axios
          .get("/api/user")
          .then((res1) => {
            dispatch(login(res1.data));
          })
          .catch((err) => {
            dispatch(logout());
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getCookie = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:8000";
  return async (dispatch) => {
    axios.get("/sanctum/csrf-cookie").then(() => {});
  };
};

export const getUserApi = (user) => {
  console.log("getUserApi");
  return async (dispatch) => {
    /*axios.defaults.withCredentials = true;
    axios
      .get("/api/user")
      .then((res) => {
        dispatch(login(res.data));
      })
      .catch((err) => {
        dispatch(logout());
      });*/
    dispatch(login(user));
  };
};

export const signOut = () => {
  return async (dispatch) => {
    axios
      .post("/logout")
      .then((res) => {
        console.log(res);
        dispatch(logout());
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
};

export const signUp = (form) => {
  return async (dispatch) => {
    axios
      .post("/register", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
};
