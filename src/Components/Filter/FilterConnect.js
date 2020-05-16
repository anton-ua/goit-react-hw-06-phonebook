import Filter from "./Filter";
import { connect } from "react-redux";
import * as contactsActions from "../../redux/contactsActions";
import { getContact, getFilter } from "../../redux/selector";

const mapStateToProps = (state) => ({
  contacts: getContact(state),
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => dispatch(contactsActions.filterContact(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
