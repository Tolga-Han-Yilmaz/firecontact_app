import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};
const contactReducer = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    appendTodo: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { setTodos, appendTodo } = contactReducer.actions;
export default contactReducer.reducer;
