import { Grid } from "@mui/material";
import React from "react";
import ContactInput from "./ContactInput";
import ContactList from "./ContactList";

const Main = () => {
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <ContactInput />
      </Grid>
      <Grid item md={6} xs={12}>
        <ContactList />
      </Grid>
    </Grid>
  );
};

export default Main;
