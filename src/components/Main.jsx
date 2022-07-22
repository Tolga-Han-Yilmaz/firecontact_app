import { Grid } from "@mui/material";
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Main = () => {
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <TodoInput />
      </Grid>
      <Grid item md={6} xs={12}>
        <TodoList />
      </Grid>
    </Grid>
  );
};

export default Main;
