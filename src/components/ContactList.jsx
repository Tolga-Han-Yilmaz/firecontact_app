import * as React from "react";
import Paper from "@mui/material/Paper";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { deleteTodo, updateTodo } from "../firebase/firebase";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  Dialog,
  FormControl,
  InputLabel,
} from "@mui/material";
import { success, wrong } from "../helper/Toasts";
import { updatesContacts } from "../redux/reducers/update";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    await deleteTodo(id, success);
  };
  const [updateState, setUpdateState] = React.useState([]);
  const [updateID, setUpdateID] = React.useState("");

  const handleEdit = async (id) => {
    let dataForUpdate = await contacts.filter((contact) => contact.id === id);
    console.log(dataForUpdate);
    await setUpdateState(dataForUpdate[0].contact);
    await setUpdateID(dataForUpdate[0].id);
    await dispatch(updatesContacts(updateState));
    await setOpen(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setUpdateState({ ...updateState, [e.target.name]: e.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTodo(updateState, updateID, success, wrong);
    await setOpen(false);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", mt: 3 }}>
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
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      sx={{ width: "100%" }}
                      // key={}
                    >
                      <form
                      // onSubmit={handleSubmitAdd}
                      >
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
                            name="name"
                            variant="standard"
                            value={updateState.name}
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
                            name="phone"
                            value={updateState.phone}
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
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Gender
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="gender"
                              name="gender"
                              value={updateState.gender}
                              label="gender"
                              onChange={(e) => handleChange(e)}
                              sx={{ width: "100%" }}
                            >
                              <MenuItem value="male">Male</MenuItem>
                              <MenuItem value="female">Female</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>

                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ width: "100%", mt: 3 }}
                          onClick={handleUpdate}
                        >
                          Update
                        </Button>
                      </form>
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
