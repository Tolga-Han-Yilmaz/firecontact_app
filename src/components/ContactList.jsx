import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);

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
            {contacts.map((contact) => {
              <TableRow hover tabIndex={-1} key={contact.id}>
                <TableCell
                // key={column.id} align={column.align}
                >
                  {contact.name}
                </TableCell>
                <TableCell
                // key={column.id} align={column.align}
                >
                  {contact.phone}
                </TableCell>
                <TableCell
                // key={column.id} align={column.align}
                >
                  {contact.gender}
                </TableCell>
                <TableCell
                // key={column.id} align={column.align}
                >
                  <DeleteForeverIcon />
                </TableCell>

                <TableCell
                // key={column.id} align={column.align}
                >
                  <EditIcon />{" "}
                </TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default ContactList;
