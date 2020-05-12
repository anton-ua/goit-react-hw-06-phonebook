import * as actions from "../../redux/contactsActions";
import { connect } from "react-redux";
import AddContact from "./AddContact";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
