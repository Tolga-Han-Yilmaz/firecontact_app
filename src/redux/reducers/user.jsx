import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.user = false;
    },
  },
});

export const { LOGIN, LOGOUT } = user.actions;
export default user.reducer;
