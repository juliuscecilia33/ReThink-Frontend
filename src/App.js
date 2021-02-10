import React from "react";
import * as ROUTES from "./constants/routes";
import { NavbarContainer } from "./containers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* <NavbarContainer /> */}

      <Switch>
        <Route path={ROUTES.SIGNUP} exact>
          <div>Signup Page</div>
        </Route>
      </Switch>
    </Router>
  );
}
