import React from "react";
import * as ROUTES from "./constants/routes"; // you can add routes here!
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from './pages/about';
import BusinessesPage from "./pages/businesses";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <div>Home Page</div>
        </Route>
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route path={ROUTES.BUSINESSES} component={BusinessesPage} />

        {/* Add routes here! */}
      </Switch>
    </Router>
  );
}
