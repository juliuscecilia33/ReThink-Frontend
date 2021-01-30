import React from "react";
import * as ROUTES from "./constants/routes";
import { NavbarContainer } from "./containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavbarContainer />

      <Switch>
        <Route path={ROUTES.HOME} exact>
          <div>Home Page</div>
        </Route>

        <Route path={ROUTES.ABOUT} exact>
          <div>About Page</div>
        </Route>

        <Route path={ROUTES.BUSINESSES} exact>
          <div>Business Page</div>
        </Route>

        <Route path={ROUTES.PROMOTE} exact>
          <div>Promote Page</div>
        </Route>

        <Route path={ROUTES.CONTACT} exact>
          <div>Contact Page</div>
        </Route>
      </Switch>
    </Router>
  );
}
