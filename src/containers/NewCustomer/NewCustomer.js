import React from "react";
import { useHistory } from "react-router-dom";

export const NewCustomer = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <h3>New Customers</h3>
      <p>
        By creating an account with our store, you will be able to move through
        the checkout process faster, store multiple shipping addresses, view and
        track your orders in your account and more.
      </p>

      <button
        type="button"
        onClick={() => history.push("/create")}
        className="btn btn-outline-dark mt-3"
      >
        Create an account
      </button>
    </React.Fragment>
  );
};
