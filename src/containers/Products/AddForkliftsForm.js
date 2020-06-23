import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../firebase";

const initialState = {
  model: "",
  engine: "",
  producer: "",
  description: "",
  photo: null,
  imageURL: null,
};

const loginSchema = Yup.object({
  model: Yup.string().required("Model is a required field"),
  engine: Yup.string().required("Engine is a required field"),
  producer: Yup.string().required("Producer is a required field"),
  description: Yup.string().required("Description is a required field"),
});

export const AddForkliftForm = () => {
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    errors,
  } = useFormik({
    initialValues: initialState,
    onSubmit: async (values, { setErrors, resetForm }) => {
      try {
        await database.ref("/").push(values);

        resetForm();
      } catch (err) {
        setErrors({ msg: err.message });
      }
    },
    validationSchema: loginSchema,
  });

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    setFieldValue("file", file.name);

    reader.onloadend = () => {
      setFieldValue("imageURL", reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-4 col-12">
          <label htmlFor="engine">Engine</label>
          <input
            className={`form-control ${errors.engine ? "is-invalid" : ""}`}
            type="text"
            name="engine"
            value={values.engine}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.engine}</div>
        </div>

        <div className="form-group col-lg-4 col-12">
          <label htmlFor="model">Model</label>
          <input
            className={`form-control ${errors.model ? "is-invalid" : ""}`}
            type="text"
            name="model"
            value={values.model}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.model}</div>
        </div>

        <div className="form-group col-lg-4 col-12">
          <label htmlFor="producer">Producer</label>
          <input
            className={`form-control ${errors.producer ? "is-invalid" : ""}`}
            type="text"
            name="producer"
            value={values.producer}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.producer}</div>
        </div>
      </div>

      <div className="row">
        <div className="form-group col-12">
          <label htmlFor="description">Description</label>
          <textarea
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            name="description"
            value={values.description}
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.description}</div>
        </div>

        <div className="form-group col-12">
          <input
            type="file"
            name="photo"
            className="form-control"
            onChange={handleChangeImage}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-outline-dark">
        Add Product
      </button>
    </form>
  );
};
