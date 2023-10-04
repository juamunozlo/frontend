import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import LoginModal from "./auth/LoginModal";
import SignUpModal from "./auth/SignUpModal";
import Store from "./home/Store";

function App() {
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
