import React from "react";

import "./clubBank.css";
import { CardBankItem } from "../../../../components/Card Bank/cardBank.component";

export const ClubBank = () => {
  return (
    <div className="container myTeamBank mt-5">
      <div className="teamBank-btn text-center">
        <button type="button" className="talento-button">
          TalentoBank
        </button>
        <button type="button" className="talento-button">
          ClubBank
        </button>
      </div>
      <div className="teamBankCard">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <CardBankItem />
          </div>
        </div>
      </div>
    </div>
  );
};
