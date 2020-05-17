import React from "react";
import styles from "./ContactsItem.module.css";
import PropTypes from "prop-types";

const ContactsItem = ({ name, number, id, deleteContact }) => (
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
);

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
