import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};
const contacts = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    SETCONTACT: (state, action) => {
      state.contacts = action.payload;
    },
    APPENDCONTACT: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { SETCONTACT, APPENDCONTACT } = contacts.actions;
export default contacts.reducer;
