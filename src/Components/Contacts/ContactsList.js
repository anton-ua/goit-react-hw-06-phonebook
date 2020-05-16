import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./ContactsList.module.css";
import TransitionListItem from "../../Transition/TransitionListItem.module.css";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactsList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = filter ? filterContacts(contacts, filter) : contacts;
  console.log("contacts", contacts);
  return (
    <TransitionGroup component="ul">
      {filteredContacts.map(({ name, number, id }) => (
        <CSSTransition
          timeout={250}
          unmountOnExit
          key={id}
          classNames={TransitionListItem}
        >
          <li>
            <p>
              {name}: <span>{number}</span>
              <button
                type="button"
                onClick={() => deleteContact(id)}
                className={styles.button}
              >
                X
              </button>
            </p>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
