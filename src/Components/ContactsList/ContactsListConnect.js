import { connect } from "react-redux";

import ContactsList from "./ContactsList";
import { getContact, getFilter } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContact(state),
  filter: getFilter(state),
});

export default connect(mapStateToProps)(ContactsList);
