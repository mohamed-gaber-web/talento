import React from "react";

import "./bankPopupAdd.css";

export const BankPlayerPopupOpret = () => {
  return (
    <div className="bank-player-popup text-center">
      <h3> Opret Øvelse </h3>
      <div className="bank-player-form">form</div>
      <div className="bank-player-card">
        <div className="bank-sub-title">
          <span> Beskrivelse </span>
          <span> Coaching Points </span>
          <span> Progressioner </span>
        </div>
        <div className="bank-player-card-block">
          <div className="row">
            <div className="col-md-4 card-border">
              <p>
                Her vil der være beskrivelse til øvelsen. Er den for lang vil
                det slutte med …
              </p>
            </div>
            <div className="col-md-4 card-border">
              <p>
                Her vil der være Coaching Points til øvelsen. Er den for lang
                vil det slutte med …
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Her vil der være Progressioner til øvelsen. Er den for lang vil
                det slutte med …
              </p>
            </div>
          </div>
        </div>
        <div className="bank-player-add-video">
          <div className="row">
            <div className="col-md-6">
              <p> Tilføj Video </p>
            </div>
            <div className="col-md-6">
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
