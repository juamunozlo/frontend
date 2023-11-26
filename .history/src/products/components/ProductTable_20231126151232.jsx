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
import { Avatar, Grid, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeStatusProduct } from "../../store/products/thunks";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const columns = [
  { id: "order", label: "Order", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 100 },
  {
    id: "description",
    label: "Description",
    minWidth: 200,
  },
  { id: "images", label: "Images", minWidth: 100 },
  { id: "updated_at", label: "Updated At", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
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
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "auto" }}>
        <div style={{ width: "100%", overflowX: "auto" }}>
          <TableContainer sx={{ minWidth: 700 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
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
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                        {columns.map((column) => {
                          if (column.id === "actions") {
                            return (
                              <TableCell key={column.id} align="left">
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
                              <TableCell key={column.id} align="left">
                                <Avatar alt={row.name} src={row.image.url} />
                              </TableCell>
                            );
                          } else {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align="left">
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
        </div>
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

