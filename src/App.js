import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp } from "./pages";

export default function App() {
  return (
    <Router>
      {/* <NavbarContainer /> */}

      <Switch>
        <Route path={ROUTES.SIGNUP} exact>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
