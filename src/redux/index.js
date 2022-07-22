import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import contactReducer from "./reducers/contactReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactReducer,
  },
});
export default store;
