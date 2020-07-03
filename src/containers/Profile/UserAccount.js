import React, { useState } from "react";
import { authRef } from "../../firebase";

const initialState = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

const UserAccount = ({ currentUser }) => {
  const { displayName, email } = currentUser;
  const [{ passwordOne, passwordTwo, error }, setPassword] = useState(
    initialState
  );

  const changePassword = async (e) => {
    e.preventDefault();

    try {
      const user = await authRef.currentUser;
      user.updatePassword(passwordOne);
      console.log("Password Updated!");
    } catch (err) {
      setPassword({ error: err.message });
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({ ...prevPassword, [name]: value }));
  };

  const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

  return (
    <div className="container">
      <h3 className="title text-center">Your Personal Information</h3>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      <form onSubmit={changePassword}>
        <div className="form-group row align-items-center">
          <label htmlFor="displayName" className="col-sm-3 mb-0">
            Name
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="displayName"
              value={displayName}
              readOnly
            />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="email" className="col-sm-3 mb-0">
            Email
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              name="email"
              value={email}
              readOnly
            />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="passwordOne" className="col-sm-3 mb-0">
            New Password
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="password"
              name="passwordOne"
              value={passwordOne}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="passwordTwo" className="col-sm-3 mb-0">
            Confirm New Password
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className="text-right">
          <button
            disabled={isInvalid}
            type="submit"
            className="btn btn-outline-dark mr-0"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAccount;
