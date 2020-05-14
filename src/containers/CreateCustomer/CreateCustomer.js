import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authRef } from "../../firebase";

const createAccountSchema = Yup.object({
  name: Yup.string().min(2, "Too Short!").required("Name is a required field"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field"),
  password: Yup.string()
    .min(6, "Password has to be longer than 6 characters!")
    .required("Password is a required field"),
});

export const CreateCustomer = ({ createAccountUser }) => {
  const { handleSubmit, handleChange, values, errors, status } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { setStatus, setErrors, resetForm }) => {
      try {
        const response = await authRef.createUserWithEmailAndPassword(
          values.email,
          values.password
        );

        response.user.updateProfile({
          displayName: values.name,
        });

        const { displayName, email: userEmail, uid } = response.user;

        const registerUser = {
          displayName,
          userEmail,
          uid,
        };

        createAccountUser(registerUser);

        resetForm();

        setStatus("Registration Successful!");
      } catch (err) {
        setErrors({ msg: err.message });
      }
    },
    validationSchema: createAccountSchema,
  });

  return (
    <div className="container">
      <h1 className="title text-center">Personal Information</h1>

      {errors["msg"] && (
        <div className="alert alert-danger mt-3">{errors["msg"]}</div>
      )}

      {status && <div className="alert alert-success mt-3">{status}</div>}

      <form onSubmit={handleSubmit} className="mt-3">
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
            className={"form-control " + (errors.email ? "is-invalid" : "")}
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
            className={"form-control " + (errors.password ? "is-invalid" : "")}
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
    </div>
  );
};
