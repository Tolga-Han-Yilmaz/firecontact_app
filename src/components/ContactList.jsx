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
import { deleteTodo } from "../firebase/firebase";
import { Typography } from "@mui/material";
import { success } from "../helper/Toasts";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const handleDelete = async (id) => {
    await deleteTodo(id, success);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", mt: 6 }}>
      <Typography variant="h5" align="center" mt={4}>
        Contacts
      </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>UserName</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => {
              return (
                <TableRow hover tabIndex={-1} key={contact.contact.id}>
                  <TableCell>{contact.contact.name}</TableCell>
                  <TableCell>{contact.contact.phone}</TableCell>
                  <TableCell>{contact.contact.gender}</TableCell>
                  <TableCell>
                    <DeleteForeverIcon
                      onClick={() => handleDelete(contact.id)}
                      sx={{ cursor: "pointer" }}
                    />
                  </TableCell>

                  <TableCell>
                    <EditIcon />{" "}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {contacts.length === 0 && (
          <Typography variant="h5" align="center" mt={4}>
            Nothing Found
          </Typography>
        )}
      </TableContainer>
    </Paper>
  );
};
export default ContactList;
