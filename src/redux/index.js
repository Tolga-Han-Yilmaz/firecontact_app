import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import contacts from "./reducers/contacts";
import updateReducer from "./reducers/update";
const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contacts,
    updates: updateReducer,
  },
});
export default store;
