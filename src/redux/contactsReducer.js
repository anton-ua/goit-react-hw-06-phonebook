import { Type } from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const contactsReducer = createReducer(initialState, {
  [Type.ADD]: (state, action) => {
    if (
      state.contacts
        .map(({ name }) => name.toLowerCase())
        .includes(action.payload.name.toLowerCase())
    ) {
      alert(`${action.payload.name} is already in contact`);
      return state;
    } else {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
  },
  [Type.DELETE]: (state, action) => ({
    ...state,
    contacts: [
      ...state.contacts.filter((contact) => contact.id !== action.payload),
    ],
  }),
  [Type.FILTER]: (state, action) => ({ ...state, filter: action.payload }),
});

export default contactsReducer;
