import { connect } from "react-redux";
import * as actions from "../../redux/contactsActions";
import ContactsList from "./ContactsList";
import { getContact, getFilter } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContact(state),
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (filter) => dispatch(actions.deleteContact(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
