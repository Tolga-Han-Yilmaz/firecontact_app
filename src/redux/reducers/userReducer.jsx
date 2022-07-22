import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};
const userReducer = createSlice({
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

export const { LOGIN, LOGOUT } = userReducer.actions;
export default userReducer.reducer;
