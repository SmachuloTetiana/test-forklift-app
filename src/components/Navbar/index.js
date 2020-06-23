import { connect } from "react-redux";
import Navbar from "./Navbar";
import { logoutUser } from "store/actions";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
