import React from "react";
import { NewCustomer } from "containers/NewCustomer/NewCustomer";
import RegisteredCustomer from "containers/RegisteredCustomer";

export const Account = () => {
  return (
    <div className="container Account">
      <h1 className="title text-center">Login or Create an Account</h1>

      <div className="row border">
        <div className="col-md-6 col-12">
          <NewCustomer />
        </div>
        <div className="col-md-6 col-12">
          <RegisteredCustomer />
        </div>
      </div>
    </div>
  );
};
