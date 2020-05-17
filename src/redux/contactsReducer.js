import { Type } from "./actionsTypes";
import { createReducer, combineReducers } from "@reduxjs/toolkit";

const contacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contactsReducer = createReducer(contacts, {
  [Type.ADD]: (state, { payload }) => {
    if (
      state
        .map(({ name }) => name.toLowerCase())
        .includes(payload.name.toLowerCase())
    ) {
      alert(`${payload.name} is already in contact`);
      return state;
    } else {
      return [...state, payload];
    }
  },

  [Type.DELETE]: (state, { payload }) => [
    ...state.filter((contact) => contact.id !== payload),
  ],
});

const filterReducer = createReducer("", {
  [Type.FILTER]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
