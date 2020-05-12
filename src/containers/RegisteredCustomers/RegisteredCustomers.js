import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authRef } from "../../firebase";

export const RegisteredCustomers = ({ loginUser }) => {
  const [alert, setAlert] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await authRef.signInWithEmailAndPassword(
          values.email,
          values.password
        );

        loginUser(res);
      } catch (e) {
        console.log(e);

        setAlert(!alert);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is a required field"),
      password: Yup.string().required("Password is a required field"),
    }),
  });

  return (
    <React.Fragment>
      <h3>Registered Customers</h3>
      <p>If you have an account with us, please log in.</p>

      {alert && (
        <div className="alert alert-danger">
          <p>{alert}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group">
          <label htmlFor="email">Email adress</label>
          <input
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
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
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.password}</div>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Login
        </button>
      </form>
    </React.Fragment>
  );
};
