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
import { changeStatusProduct } from "../../store/products/thunks";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const columns = [
  { id: "customer", label: "Customer" },
  { id: "email", label: "Email" },
  { id: "address", label: "Address" },
  { id: "phone", label: "Phone" },
  { id: "order", label: "Order" },
  { id: "status", label: "Status" },
  { id: "actions", label: "Actions" },
];

export default function OrderTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const intToStatus = (number) => {
    switch (number) {
      case 1:
        return "En espera";
      case 2:
        return "Aceptada";
      case 3:
        return "Rechazada";
      case 4:
        return "Terminada";
    }
  };

  const orders = useSelector((state) => state.orders);

  return (
    <>
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
              {orders
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
                                <Link to={``}>
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
                        } else if (column.id === "customer") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {row.customer.name}
                            </TableCell>
                          );
                        } else if (column.id === "email") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {row.customer.email}
                            </TableCell>
                          );
                        } else if (column.id === "address") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {row.customer.address}
                            </TableCell>
                          );
                        } else if (column.id === "phone") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {row.customer.phone}
                            </TableCell>
                          );
                        } else if (column.id === "order") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {row.order.products.length} - {"products"}
                            </TableCell>
                          );
                        } else if (column.id === "status") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {intToStatus(row.order.status)}
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
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
