import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userDeducer";
import contactReducer from "./reducers/contactReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
  },
});
export default store;
