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
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "rol", label: "Rol" },
  { id: "updated_at", label: "Updated At" },
  { id: "actions", label: "Actions" },
];

export default function UserTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const intToRol = (number) => {
    switch (number) {
      case 1:
        return "Administrador";
      case 2:
        return "Chef";
      case 3:
        return "Cliente";
    }
  };

  const users = useSelector((state) => state.users);

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
              {users
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
                                <Link to={`/users/edit/${row.id}`}>
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
                        } else if (column.id === "rol") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {intToRol(row.rol)}
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
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
