import React from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TodoInput = () => {
  return (
    <Container>
      <Grid container>
        <form sx={{ mx: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="name" variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="number"
              id="input-with-sx"
              label="phone"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              // sx={{ width: "100%" }}
              id="outlined-select-currency"
              select
              label="Gender"
              value=""
              //   onChange={handleChange}
              helperText="Please select your gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="male">Female</MenuItem>
            </TextField>
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

export default TodoInput;
