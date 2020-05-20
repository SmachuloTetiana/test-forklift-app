import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(Navbar);
