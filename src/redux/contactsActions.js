import { createAction } from "@reduxjs/toolkit";
import { Type } from "./actionsTypes";

export const addContact = createAction(Type.ADD);

export const deleteContact = createAction(Type.DELETE);

export const filterContact = createAction(Type.FILTER);
