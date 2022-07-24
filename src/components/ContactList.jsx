import { useState } from "react";
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
import { deleteTodo, updateTodo } from "../firebase/firebase";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
} from "@mui/material";
import { success } from "../helper/Toasts";
// import { updatesContacts } from "../redux/reducers/update";
import AccountCircle from "@mui/icons-material/AccountCircle";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  // const dispatch = useDispatch();
  const handleDelete = async (id) => {
    await deleteTodo(id, success);
  };

  const handleEdit = (id) => {
    // const test = contacts.filter((contact) => contact.id === id);
    setOpen(true);
  };

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    gender: "name",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };
  const handleSubmitEdit = async (e, id) => {
    e.preventDefault();
    await updateTodo(id, contact);
    setOpen(false);
    setContact({ name: "", phone: "", gender: "male" });
  };
  // dispatch(updatesContacts(contact));

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
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
            {contacts?.map((contact, index) => {
              return (
                <TableRow hover tabIndex={-1} key={index}>
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
                    <Dialog open={open} onClose={handleClose}>
                      <form onSubmit={handleSubmitEdit}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            width: "100%",
                          }}
                        >
                          <AccountCircle
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          />
                          <TextField
                            id="name"
                            label="name"
                            variant="standard"
                            value={contact.name}
                            onChange={(e) => handleChange(e)}
                            sx={{ width: "100%" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            mt: 3,
                            mb: 3,
                          }}
                        >
                          <AccountCircle
                            sx={{ color: "action.active", mr: 1, my: 0.5 }}
                          />
                          <TextField
                            type="number"
                            id="phone"
                            label="phone"
                            value={contact.phone}
                            variant="standard"
                            onChange={(e) => handleChange(e)}
                            sx={{ width: "100%" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            mt: 3,
                          }}
                        >
                          <Select
                            labelId="demo-simple-select-label"
                            id="gender"
                            value={contact.gender}
                            label="gender"
                            onChange={(e) => handleChange(e)}
                            sx={{ width: "100%" }}
                          >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                          </Select>
                        </Box>

                        <Button
                          // disabled={!contact.name || !contact.phone}
                          type="submit"
                          variant="contained"
                          sx={{ width: "100%", mt: 3 }}
                        >
                          Add
                        </Button>
                      </form>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Subscribe</Button>
                      </DialogActions>
                    </Dialog>
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
