import { connect } from "react-redux";
import UserAccount from "./UserAccount";

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(UserAccount);
