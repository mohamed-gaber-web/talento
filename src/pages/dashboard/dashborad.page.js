import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "../../components/header/header.component";
import { Menu } from "../../components/menu/menu.component";

import { Switch, Route } from "react-router-dom";
import { TalentoBank } from "./Player Developing Bank/Talento Bank/talentoBank.page";
import { ClubLeaderCoaches } from "./Club/club leader coaches/club-leader-coaches.page";
import { ClubBank } from "./Player Developing Bank/Club Bank/clubBank.page";
import { ClubData } from "./Club/club-data.page";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div> Home </div>,
    main: () => (
      <div>
        <ClubData />
      </div>
    ),
  },
  {
    path: "club-data",
    exact: true,
    sidebar: () => <div> Club Data </div>,
    main: () => <h2> Hello Club Data </h2>,
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

export function DashboardPage() {
  return (
    <>
      <Header />

      <div className="row">
        <div className="col-md-2">
          <Menu />
        </div>

        <div className="col-md-10">
          <div className="content">
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
