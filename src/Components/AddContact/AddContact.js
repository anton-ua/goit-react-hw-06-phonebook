import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./AddContact.module.css";
import { CSSTransition } from "react-transition-group";
import TransitionLogo from "../../Transition/TransitionLogo.module.css";
import { v4 as uuidv4 } from "uuid";

const InitialState = { name: "", number: "" };

export default class AddContact extends Component {
  state = { contactToAdd: { ...InitialState }, isLogo: false };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState(({ contactToAdd }) => ({
      contactToAdd: { ...contactToAdd, id: uuidv4(), [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.contactToAdd.name) {
      return;
    }

    if (!this.state.contactToAdd.number) {
      return;
    }

    this.props.addContact({ ...this.state.contactToAdd });

    this.reset();
  };

  reset = () => {
    this.setState({ contactToAdd: { ...InitialState } });
  };

  componentDidMount() {
    this.setState({ isLogo: true });
  }

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.isLogo}
          classNames={TransitionLogo}
          timeout={500}
          unmountOnExit
        >
          <h2>Phonebook</h2>
        </CSSTransition>
        <form onSubmit={this.handleSubmit}>
          <label name="name">
            Name
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.contactToAdd.name}
              onChange={this.handleChange}
            />
          </label>
          <label name="number">
            Number
            <input
              type="text"
              placeholder="Enter phone number"
              name="number"
              value={this.state.contactToAdd.number}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.buttonAdd} type="submit">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
