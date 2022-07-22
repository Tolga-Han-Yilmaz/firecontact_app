import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Grid,
  Container,
  Select,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { addTodo } from "../firebase/firebase";

const ContactInput = () => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    gender: "male",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    await addTodo({
      contact,
    });
    console.log(contact);
  };

  return (
    <Container>
      <Grid container>
        <form sx={{ mx: "auto" }} onSubmit={handleSubmitAdd}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="name"
              label="name"
              variant="standard"
              value={contact.name}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", mt: 3, mb: 3 }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="number"
              id="phone"
              label="phone"
              value={contact.phone}
              variant="standard"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Select
              labelId="demo-simple-select-label"
              id="gender"
              value={contact.gender}
              label="gender"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </Box>

          <Button
            //   disabled={!name || !password || !email}
            type="submit"
            variant="contained"
            sx={{ width: "100%", mt: 3 }}
          >
            Register
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default ContactInput;