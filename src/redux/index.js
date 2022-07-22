import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import contacts from "./reducers/contacts";
const store = configureStore({
  reducer: {
    user: user,
    contacts: contacts,
  },
});
export default store;
