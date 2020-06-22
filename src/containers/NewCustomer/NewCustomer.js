import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const NewCustomer = () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(!redirect);
  };

  if (redirect) return <Redirect to="/create" />;

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
        onClick={handleClick}
        className="btn btn-outline-dark mt-3"
      >
        Create an account
      </button>
    </React.Fragment>
  );
};
