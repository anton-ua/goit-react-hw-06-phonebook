import { createAction } from "@reduxjs/toolkit";

export const Type = {
  ADD: "ADD_CONTACT",
  DELETE: "DELETE_CONTACT",
  FILTER: "FILTER_CONTACT",
};

export const addContact = createAction(Type.ADD);

export const deleteContact = createAction(Type.DELETE);

export const filterContact = createAction(Type.FILTER);
