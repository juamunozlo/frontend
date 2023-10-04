import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Avatar, Grid, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeStatusProduct } from "../store/products/thunks";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const columns = [
  { id: "order", label: "Order" },
  { id: "name", label: "Name" },
  { id: "price", label: "Price" },
  {
    id: "description",
    label: "Description",
    maxWidth: 200,
  },
  { id: "images", label: "Images" },
  { id: "updated_at", label: "Updated At" },
  { id: "actions", label: "Actions" },
];

export default function ProductTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const products = useSelector((state) => state.products);

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <h2>Products</h2>
        </Grid>
        <Grid item xs={6} textAlign="right" alignSelf="center">
          <Tooltip title="Create a product">
            <Link to="/products/create">
              <IconButton color="primary" aria-label="Create a product">
                <AddCircleOutlineRoundedIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map((column) => {
                        if (column.id === "actions") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Tooltip title="Edit">
                                <Link to={`/products/edit/${row.id}`}>
                                  <IconButton color="primary">
                                    <EditRoundedIcon />
                                  </IconButton>
                                </Link>
                              </Tooltip>
                              {row.deleted_at ? (
                                <Tooltip title="Restore">
                                  <IconButton
                                    color="primary"
                                    onClick={() => changeStatusProduct(row)}
                                  >
                                    <CheckCircleOutlineRoundedIcon />
                                  </IconButton>
                                </Tooltip>
                              ) : (
                                <Tooltip title="Delete">
                                  <IconButton
                                    color="primary"
                                    onClick={() => changeStatusProduct(row)}
                                  >
                                    <HighlightOffRoundedIcon />
                                  </IconButton>
                                </Tooltip>
                              )}
                            </TableCell>
                          );
                        } else if (column.id === "images") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <Avatar alt={row.name} src={row.image.url} />
                            </TableCell>
                          );
                        } else {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
