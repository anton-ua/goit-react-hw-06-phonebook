import { connect } from "react-redux";
import * as actions from "../../redux/contactsActions";
import ContactsList from "./ContactsList";

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: contacts,
  filter: filter,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (filter) => dispatch(actions.deleteContact(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
