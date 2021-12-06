import React from "react";

import "./activity.page.css";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

// validation form
const validationForm = Yup.object().shape({
  dag: Yup.string().required("Required"),
  Tidspunkt: Yup.string().required("Required"),
  Inden: Yup.string().required("Required"),
  Tema: Yup.string().required("Required"),
  Aktivitet: Yup.string().required("Required"),
  Fokuspunkt: Yup.string().required("Required"),
  Træningprogram: Yup.string().required("Required"),
});

export const Activity = () => {
  const ErrorMsg = styled.div`
    background-color: rgb(220 53 69 / 80%);
    padding: 9px 0;
    margin: 10px 0;
    border-radius: 6px;
    color: rgb(255 255 255);
    text-align: center;
  `;

  return (
    <div className="activity container">
      <h3 className="text-center mb-3"> Opret Aktivitet </h3>
      <Formik
        initialValues={{
          dag: "",
          Tidspunkt: "",
          Inden: "",
          Tema: "",
          Aktivitet: "",
          Fokuspunkt: "",
          Træningprogram: "",
        }}
        validationSchema={validationForm}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="dag"
                    value={values.dag}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="dag" />
                    <option value="1" label="dag1" />
                    <option value="2" label="dag2" />
                  </select>
                  {errors.dag && touched.dag ? (
                    <ErrorMsg>{errors.dag}</ErrorMsg>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="Tidspunkt"
                    value={values.Tidspunkt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Tidspunkt" />
                    <option value="1" label="Tidspunkt1" />
                    <option value="2" label="Tidspunkt2" />
                  </select>
                  {errors.Tidspunkt && touched.Tidspunkt ? (
                    <ErrorMsg>{errors.Tidspunkt}</ErrorMsg>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="Inden"
                    value={values.Inden}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Inden" />
                    <option value="1" label="Inden1" />
                    <option value="2" label="Inden2" />
                  </select>
                  {errors.Inden && touched.Inden ? (
                    <ErrorMsg>{errors.Inden}</ErrorMsg>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="Tema"
                    value={values.Tema}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Tema" />
                    <option value="1" label="Tema1" />
                    <option value="2" label="Tema2" />
                  </select>
                  {errors.Tema && touched.Tema ? (
                    <ErrorMsg>{errors.Tema}</ErrorMsg>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="Aktivitet"
                    value={values.Aktivitet}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Aktivitet" />
                    <option value="1" label="Aktivitet1" />
                    <option value="2" label="Aktivitet2" />
                  </select>
                  {errors.Aktivitet && touched.Aktivitet ? (
                    <ErrorMsg>{errors.Aktivitet}</ErrorMsg>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="Fokuspunkt"
                    value={values.Fokuspunkt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Fokuspunkt" />
                    <option value="1" label="Fokuspunkt1" />
                    <option value="2" label="Fokuspunkt2" />
                  </select>
                  {errors.Fokuspunkt && touched.Fokuspunkt ? (
                    <ErrorMsg>{errors.Fokuspunkt}</ErrorMsg>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="Træningprogram"
                    value={values.Træningprogram}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ display: "block" }}
                  >
                    <option value="" label="Træningprogram" />
                    <option value="1" label="Træningprogram1" />
                    <option value="2" label="Træningprogram2" />
                  </select>
                  {errors.Træningprogram && touched.Træningprogram ? (
                    <ErrorMsg>{errors.Træningprogram}</ErrorMsg>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="form-group mt-5">
              <button className="btn btn-block" type="submit">
                Save Changes
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
