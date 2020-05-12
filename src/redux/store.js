import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";

const store = configureStore({ reducer: contactsReducer });

export default store;
