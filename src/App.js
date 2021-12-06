import "./App.css";

import { Switch, Route } from "react-router-dom";

import { SplashScreen } from "./pages/splash-screen/splash-screen.page";
import { LoginClub } from "./pages/Auth/login-club/login-club.page";
import { DashboardPage } from "./pages/dashboard/dashborad.page";

function App() {
  return (
    <Switch>
      <Route path="/start" exact component={SplashScreen} />
      <Route path="/login" exact component={LoginClub} />
      <Route path="/">
        <DashboardPage />
      </Route>
    </Switch>
  );
}

export default App;
