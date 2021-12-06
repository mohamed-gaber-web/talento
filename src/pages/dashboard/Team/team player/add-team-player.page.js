import React from "react";

import "./add-team-player.page.css";

import { Formik, Field, Form } from "formik";

export function AddTeamPlayer() {
  return (
    <div className="add-team-player ">
      <h3 className="text-center mb-5"> Add player </h3>
      <Formik
        initialValues={{
          Brugernavn: "",
          email: "",
          Tlfnummer: "",
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
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <Field
              className="form-control"
              name="Tlfnummer"
              placeholder="Tlf nummer"
            />
          </div>

          <div className="form-group">
            <Field
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Player
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
