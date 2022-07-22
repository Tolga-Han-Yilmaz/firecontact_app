import React from "react";
import { Container, FormControl, TextField, Button } from "@mui/material";

const Register = () => {
  return (
    <Container maxWidth="sm" sx={{ border: "1px solid red", mt: 10 }}>
      <FormControl>
        <TextField
          margin="normal"
          id="name"
          label="name"
          type="text"
          placeholder="Enter your Name"
          fullWidth
        />
        <TextField
          margin="normal"
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your Email"
          fullWidth
        />
        <TextField
          margin="normal"
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your Email"
          fullWidth
        />

        <TextField
          margin="normal"
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your Password"
          fullWidth
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Register
        </Button>
      </FormControl>
    </Container>
  );
};

export default Register;
