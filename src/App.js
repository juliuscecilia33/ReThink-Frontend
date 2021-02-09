import React from "react";
import * as ROUTES from "./constants/routes"; // you can add routes here!
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <div>Home Page</div>
        </Route>

        {/* Add routes here! */}
      </Switch>
    </Router>
  );
}
