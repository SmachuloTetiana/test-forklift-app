import { connect } from "react-redux";
import { loginUser } from "store/actions";
import { RegisteredCustomers } from "./RegisteredCustomers";

const mapStateToProps = (state) => ({
  myUsers: state.users.currentUser,
});

const mapDispatchToProps = { loginUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisteredCustomers);
