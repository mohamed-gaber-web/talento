import React from "react";

import { PieChart } from "react-minimal-pie-chart";

import "./playerData.page.css";

export const PlayerData = () => {
  return (
    <div className="playerData container mt-5">
      <div className="charts-cont">
        <div className="charts-child">
          <PieChart
            label={(props, style) => {
              return props.dataEntry.title;
            }}
            labelStyle={{
              fontSize: "10px",
              fill: "#fff",
              fonrWeight: "600",
            }}
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </div>

        <div className="charts-child">
          <PieChart
            label={(props, style) => {
              return props.dataEntry.title;
            }}
            labelStyle={{
              fontSize: "10px",
              fill: "#fff",
              fonrWeight: "600",
            }}
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
