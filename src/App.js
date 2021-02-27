import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUp, Contact, SignUp2 } from "./pages";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGNUP} exact>
          <SignUp />
        </Route>
      </Switch>
      <Switch>
        <Route path={ROUTES.CONTACT} exact>
          <Contact />
        </Route>
      </Switch>
      <Switch>
        <Route path={ROUTES.SIGNUP2} exact>
          <SignUp2 />
        </Route>
      </Switch>
    </Router>
  );
}
