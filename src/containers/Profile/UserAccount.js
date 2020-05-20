import React, { useState, useContext } from "react";
import { authRef } from "../../firebase";

const UserAccount = ({ currentUser }) => {
  const changePassword = async (e) => {
    e.preventDefault();

    const user = authRef.currentUser;
    console.log(user);
    try {
      await user.updatePassword();
      console.log("Password Updated!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h3 className="title text-center">Your Personal Information</h3>

      <form onSubmit={changePassword}>
        <div className="form-group row align-items-center">
          <label htmlFor="displayName" className="col-sm-2 mb-0 required">
            Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="displayName"
              value={currentUser.displayName}
            />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="email" className="col-sm-2 mb-0 required">
            Email
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              name="email"
              value={currentUser.email}
            />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="password" className="col-sm-2 mb-0 required">
            Password
          </label>
          <div className="col-sm-10">
            <input className="form-control" type="password" name="password" />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="new_password" className="col-sm-2 mb-0">
            New Password
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              name="new_password"
              value={currentUser.newPassword}
            />
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-outline-dark mr-0">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAccount;
