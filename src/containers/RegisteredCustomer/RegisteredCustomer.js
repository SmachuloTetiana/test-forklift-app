import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authRef } from "../../firebase";
import { Redirect } from "react-router-dom";
import { Context } from "context/contextState";
import { loginUser } from "store/actions";

const loginSchema = Yup.object({
  email: Yup.string().email().required("Email is a required field"),
  password: Yup.string().required("Password is a required field"),
});

const RegisteredCustomer = ({ isLoggedIn }) => {
  const { dispatch } = useContext(Context);

  const { handleSubmit, handleChange, values, errors, status } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setStatus, setErrors, resetForm }) => {
      try {
        const res = await authRef.signInWithEmailAndPassword(
          values.email,
          values.password
        );

        dispatch(loginUser(res.user));

        resetForm();

        setStatus("User was updated successfully.");
      } catch (err) {
        setErrors({ msg: err.message });
      }
    },
    validationSchema: loginSchema,
  });

  // if (!isLoggedIn) return <Redirect to="/my-account" />;

  return (
    <React.Fragment>
      <h3>Registered Customers</h3>
      <p>If you have an account with us, please log in.</p>

      {errors["msg"] && (
        <div className="alert alert-danger mt-3">{errors["msg"]}</div>
      )}

      {status && <div className="alert alert-success mt-3">{status}</div>}

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

export default RegisteredCustomer;
