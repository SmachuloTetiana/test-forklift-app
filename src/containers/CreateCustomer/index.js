import { connect } from "react-redux";
import { createAccountUser } from "store/actions";
import { CreateCustomer } from "./CreateCustomer";

const mapDispatchToProps = { createAccountUser };

export default connect(null, mapDispatchToProps)(CreateCustomer);
