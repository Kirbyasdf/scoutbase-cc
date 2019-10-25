import React, { useState, useEffect } from "react";
import "tachyons";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountriesContainer from "./containers/CountriesContainer.js";
import Country from "./components/Country.js";
import WelcomePage from "./components/WelcomePage.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/countries" component={CountriesContainer} />
        <Route to="/countries/:code" component={Country} />
      </Switch>
    </Router>
  );
}

export default App;
