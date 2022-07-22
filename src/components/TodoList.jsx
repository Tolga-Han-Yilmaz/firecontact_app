import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function StickyHeadTable() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
              //   key={column.id}
              //   align={column.align}
              //   style={{ minWidth: column.minWidth }}
              >
                UserName
              </TableCell>
              <TableCell
              //   key={column.id}
              //   align={column.align}
              //   style={{ minWidth: column.minWidth }}
              >
                Phone Number
              </TableCell>
              <TableCell
              //   key={column.id}
              //   align={column.align}
              //   style={{ minWidth: column.minWidth }}
              >
                Gender
              </TableCell>
              <TableCell
              //   key={column.id}
              //   align={column.align}
              //   style={{ minWidth: column.minWidth }}
              >
                Delete
              </TableCell>
              <TableCell
              //   key={column.id}
              //   align={column.align}
              //   style={{ minWidth: column.minWidth }}
              >
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox" tabIndex={-1}>
              <TableCell
              // key={column.id} align={column.align}
              ></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
