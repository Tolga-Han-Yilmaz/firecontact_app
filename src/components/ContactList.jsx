import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTodo } from "../firebase/firebase";
import { Typography } from "@mui/material";
import { success } from "../helper/Toasts";
import { updatesContacts, appendUpdates } from "../redux/reducers/update";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    await deleteTodo(id, success);
  };

  const handleEdit = (id) => {
    const test = contacts.filter((contact) => contact.id === id);
    dispatch(updatesContacts(test));
    // dispatch(appendUpdates(test));
    console.log(test);
    console.log(contacts[0].id);
    console.log(id);
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
                    <EditIcon
                      onClick={() => handleEdit(contact.id)}
                      sx={{ cursor: "pointer" }}
                    />
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
