import { connect } from "react-redux";
import { loginUser } from "store/actions";
import { RegisteredCustomer } from "./RegisteredCustomer";

const mapDispatchToProps = { loginUser };

export default connect(null, mapDispatchToProps)(RegisteredCustomer);
