import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

export default connect(mapStateToProps)(Navbar);
