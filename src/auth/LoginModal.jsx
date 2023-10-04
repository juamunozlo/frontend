import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //p: 4,
};

export default function LoginModal({
  openLogin,
  handleCloseLogin,
  getUser,
  handleOpenSignUp,
}) {
  const [openForgetPassword, setOpenForgetPassword] = useState(false);
  const handleCloseForgetPassword = () => {
    setOpenForgetPassword(false);
  };
  const handleOpenForgetPassword = () => {
    setOpenForgetPassword(true);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openLogin}
      onClose={handleCloseLogin}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openLogin}>
        <Box sx={style}>
          <Login
            handleOpenSignUp={handleOpenSignUp}
            getUser={getUser}
            handleOpenForgetPassword={handleOpenForgetPassword}
          />
          <ForgetPassword
            openForgetPassword={openForgetPassword}
            handleCloseForgetPassword={handleCloseForgetPassword}
          />
        </Box>
      </Fade>
    </Modal>
  );
}
