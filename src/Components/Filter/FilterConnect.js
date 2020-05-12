import Filter from "./Filter";
import { connect } from "react-redux";
import * as contactsActions from "../../redux/contactsActions";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => dispatch(contactsActions.filterContact(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
