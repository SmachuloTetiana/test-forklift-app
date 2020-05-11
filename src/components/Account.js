import React from 'react';
import NewCustomers from '../containers/NewCustomers/NewCustomers';
import { RegisteredCustomers } from '../containers/RegisteredCustomers/RegisteredCustomers';
export const Account = () => {
  return (
    <div className="container Account">
      <h1 className="title text-center">Login or Create an Account</h1>

      <div className="row border">
        <div className="col-md-6 col-12">
          <NewCustomers />
        </div>
        <div className="col-md-6 col-12">
          <RegisteredCustomers />
        </div>
      </div>
    </div>
  );
};
