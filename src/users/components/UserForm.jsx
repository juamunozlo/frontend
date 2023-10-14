import styled from "@emotion/styled";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { storeProduct, updateProduct } from "../../store/products/thunks";
import { useSelector } from "react-redux";
const Input = styled("input")({
  display: "none",
});
export default function UserForm({ edit }) {
  const users = useSelector((state) => state.users);

  let initialForm = {
    name: "",
    email: "",
    rol: 0,
  };

  let roles = [
    { id: 3, name: "Cliente" },
    { id: 2, name: "Chef" },
    { id: 1, name: "Administrador" },
  ];

  const { id } = useParams();
  if (edit) {
    initialForm = users.find((user) => user.id === parseInt(id));
  }
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || form.rol === "") {
      alert("Some fields are required.");
      return;
    }
    const formData = new FormData();
    formData.append("id", form.id);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("rol", form.rol);

    if (edit) {
      updateProduct(formData);
    } else {
      storeProduct(formData);
    }
  };
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            autoComplete="name"
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            onChange={handleChange}
            value={form.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            value={form.email}
            type="email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="rol"
            name="rol"
            select
            label="Rol"
            defaultValue="1"
            onChange={handleChange}
            value={form.rol}
            helperText="Select a rol"
          >
            {roles.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            onChange={handleChange}
            value={form.password}
            type="password"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            id="password_confirm"
            label="Password confirm"
            name="password_confirm"
            autoComplete="password_confirm"
            onChange={handleChange}
            value={form.password_confirm}
            type="password"
          />
        </Grid>
        <Grid item xs={12} md={12} textAlign="center">
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            {edit ? "Edit user" : "Create user"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
