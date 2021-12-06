import React from "react";

import "./bankPopup.css";

export const BankPlayerPopup = () => {
  return (
    <div className="bank-player-popup text-center">
      <h3> Opret Træningsprogram </h3>
      <div className="bank-player-form">form</div>
      <div className="bank-player-card">
        <h3> Vælg Øvelser </h3>
        <div className="bank-player-card-block">
          <div className="row">
            <div className="col-md-4 card-border">
              <div className="bank-player-title">
                <b> Sænke Slagskib </b>
                <p>
                  Her vil der være beskrivelse til øvelsen. Er den for lang vil
                  det slutte med …
                </p>
              </div>
            </div>
            <div className="col-md-4 card-border">
              <p className="bank-player-time"> 15 min </p>
            </div>
            <div className="col-md-3">
              <img
                className="img-responsive"
                src="https://dummyimage.com/200x130/000/fff"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bank-card-btn">
          <button className="btn btn-danger"> Delete Changes</button>
          <button className="btn btn-success"> Save Changes</button>
        </div>
      </div>
    </div>
  );
};
