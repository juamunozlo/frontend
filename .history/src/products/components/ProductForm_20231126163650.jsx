import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { storeProduct, updateProduct } from "../../store/products/thunks";
import { useSelector } from "react-redux";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
const Input = styled("input")({
  display: "none",
});
export default function ProductForm({ edit }) {
  const products = useSelector((state) => state.products);

  let initialForm = {
    name: "",
    price: "",
    description: "",
    order: "1",
    image: null,
    preview: null,
  };
  const { id } = useParams();
  if (edit) {
    initialForm = products.find((product) => product.id === parseInt(id));
  }
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
        preview: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.name === "" ||
      form.price === "" ||
      form.description === "" ||
      form.order === ""
    ) {
      alert("Some fields are required.");
      return;
    }
    const formData = new FormData();
    formData.append("id", form.id);
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("order", form.order);
    formData.append("image", form.image);

    if (edit) {
      updateProduct(formData);
    } else {
      storeProduct(formData);
    }
  };
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            autoComplete="given-name"
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
        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
            autoComplete="price"
            onChange={handleChange}
            value={form.price}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            id="order"
            label="Order"
            name="order"
            autoComplete="order"
            onChange={handleChange}
            value={form.order}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            multiline
            label="description"
            name="description"
            rows={2}
            onChange={handleChange}
            value={form.description}
          />
        </Grid>
        <Grid item xs={12} md={4} alignSelf="center">
          <Stack direction="row" spacing={2} justifyContent="center" fontSize="large">
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                name="image"
                onChange={handleFileChange}
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
            <Avatar
              alt="Product"
              src={
                form.preview
                  ? form.preview
                  : form.id
                  ? form.image.url
                  : form.preview
              }
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={12} textAlign="center">
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            {edit ? "Edit product" : "Create product"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
