import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authRef } from "../../firebase";

export const NewCustomers = ({ registerUser }) => {
  const [alert, setAlert] = useState(false);

  const {
    handleSubmit,
    handleChange,
    handleReset,
    values,
    errors,
    s,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await authRef.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      const { displayName, email: userEmail, uid } = res.user;

      registerUser({
        displayName: values.name,
        userEmail,
        uid,
      });

      handleReset();
      setAlert(!alert);
    },
    onReset: () => {},
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .required("Name is a required field"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is a required field"),
      password: Yup.string()
        .min(6, "Password has to be longer than 6 characters!")
        .required("Password is a required field"),
    }),
  });

  return (
    <React.Fragment>
      <h3>New Customers</h3>
      <p>
        By creating an account with our store, you will be able to move through
        the checkout process faster, store multiple shipping addresses, view and
        track your orders in your account and more.
      </p>

      {!alert ? (
        <form onSubmit={handleSubmit} onReset={handleReset} className="mt-3">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className={"form-control " + (errors.name ? "is-invalid" : "")}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email adress</label>
            <input
              className={"form-control " + (errors.name ? "is-invalid" : "")}
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className={"form-control " + (errors.name ? "is-invalid" : "")}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>
          <button type="submit" className="btn btn-outline-dark">
            Create an account
          </button>
        </form>
      ) : (
        <div className="alert alert-success mt-4">
          <p>Registration Successful!</p>
        </div>
      )}
    </React.Fragment>
  );
};
