import React from "react";
import { Container, FormControl, TextField, Button } from "@mui/material";

const Login = () => {
  let error = false;
  return (
    <Container maxWidth="sm" sx={{ border: "1px solid red", mt: 10 }}>
      <FormControl>
        <TextField
          margin="normal"
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your Email"
          fullWidth
          error={error}
          helperText={error && "Incorrect Email Format"}
        />

        <TextField
          margin="normal"
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your Password"
          fullWidth
          error={error}
          helperText={error && "Incorrect Password Format"}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Login;
