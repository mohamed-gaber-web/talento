import React from "react";

import "./header.component.css";

export function Header() {
  return (
    <div className="header text-center">
      <div className="row">
        <div className="col-md-4">
          <div className="logo-img">
            <h3> Logo Club </h3>
          </div>
        </div>

        <div className="col-md-4">
          <p> Club Leader Access </p>
        </div>

        <div className="col-md-4">
          <div className="logo-img">
            <img
              src={require("../../assets/images/final_talento-16.png").default}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
