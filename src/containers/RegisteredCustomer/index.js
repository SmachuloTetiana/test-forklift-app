import { connect } from "react-redux";
import RegisteredCustomer from "./RegisteredCustomer";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

export default connect(mapStateToProps)(RegisteredCustomer);
