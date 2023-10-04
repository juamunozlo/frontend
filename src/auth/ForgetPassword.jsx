import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
//import axios from "axios";

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

export default function ForgetPassword({
  openForgetPassword,
  handleCloseForgetPassword,
}) {
  const [form, setForm] = useState({ email: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.email != "") {
      axios
        .post("/forgot-password", form)
        .then(({ message }) => {
          console.log(message);
          alert(message);
        })
        .catch(({ response }) => {
          console.log(response);
          alert(response.data.message);
        });
    } else {
      alert("Email field is required.");
    }
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={openForgetPassword}
        onClose={handleCloseForgetPassword}
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              value={form.email}
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
          <Button onClick={handleCloseForgetPassword}>Close</Button>
        </Box>
      </Modal>
    </>
  );
}
