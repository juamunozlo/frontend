import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import LoginModal from "./auth/LoginModal";
import SignUpModal from "./auth/SignUpModal";
import Store from "./home/Store";
import { useDispatch } from "react-redux";
import { getCookie, getUserApi } from "./store/auth/thunks";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:8000";
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App");
    dispatch(getCookie());
  }, []);

  const getUser = () => {
    dispatch(getUserApi());
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
      <HashRouter>
        <Store
          handleOpenLogin={handleOpenLogin}
          handleOpenSignUp={handleOpenSignUp}
        />
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
      </HashRouter>
    </>
  );
}

export default App;
