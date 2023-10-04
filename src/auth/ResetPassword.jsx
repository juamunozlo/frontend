import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
//import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ResetPassword() {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [form, setForm] = useState({
    token: query.get("token"),
    email: query.get("email"),
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/reset-password", form)
      .then(({ message }) => {
        console.log(message);
        alert(message);
        navigate("/");
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.message);
      });
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 350 }}>
          <h2 id="child-modal-title">Reset password</h2>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={form.password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="Confirm password"
              type="password"
              id="passwordConfirm"
              autoComplete="current-password"
              onChange={handleChange}
              value={form.passwordConfirm}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button>
          </Box>
          {/*<Button onClick={handleClose}>Close</Button>*/}
        </Box>
      </Modal>
    </>
  );
}
