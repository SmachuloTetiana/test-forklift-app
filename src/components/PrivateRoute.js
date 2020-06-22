import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  return (
    <React.Fragment>
      {props.isLoggedIn ? props.children : <Redirect to="/account" />}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
