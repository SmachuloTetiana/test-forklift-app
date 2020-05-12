import { connect } from "react-redux";
import { registerUser } from "store/actions";
import { NewCustomers } from "./NewCustomers";

const mapStateToProps = (state) => ({
  myUsers: state.users.currentUser,
});

const mapDispatchToProps = { registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomers);
