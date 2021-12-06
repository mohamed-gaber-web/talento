import React from "react";

import { Formik, Field, Form } from "formik";

import "./login-club.page.css";
import { Navbar } from "./../../../components/navbar/navbar.component";

export function LoginClub() {
  return (
    <>
      <Navbar />
      <div className="login_club text-center">
        <div className="container">
          <div className="logo">
            <img
              src={
                require("../../../assets/images/final_talento-06.png").default
              }
              alt=""
            />
          </div>
          <Formik
            initialValues={{
              Brugernavn: "",
              password: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  name="Brugernavn"
                  placeholder="Brugernavn"
                />
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  name="password"
                  placeholder="password"
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Log in{" "}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
