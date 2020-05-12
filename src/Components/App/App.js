import React from "react";
import styles from "./App.module.css";
import AddContactConnect from "../AddContact/AddContactConnect";
import ContactsListConnect from "../Contacts/ContactsListConnect";
import FilterConnect from "../Filter/FilterConnect";

const App = () => (
  <div className={styles.container}>
    <AddContactConnect />
    <FilterConnect />
    <ContactsListConnect />
  </div>
);
export default App;
