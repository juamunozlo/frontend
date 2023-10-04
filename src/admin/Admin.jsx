import { Route, Routes } from "react-router-dom";
import ProductCrud from "./ProductCrud";
import UserCrud from "./UserCrud";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

export default function Admin() {
  return (
    <Routes>
      <Route exact path="/" element={<ProductTable />} />
      <Route exact path="/products/create" element={<ProductForm />} />
      <Route
        exact
        path="/products/edit/:id"
        element={<ProductForm edit={true} />}
      />
      <Route exact path="/users" element={<UserCrud />} />
    </Routes>
  );
}
