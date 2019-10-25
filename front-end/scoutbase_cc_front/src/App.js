import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";

import "tachyons";

import Countries from "./components/Countries.js";
import Country from "./components/Country.js";
import WelcomePage from "./components/WelcomePage.js";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/countries" component={Countries} />
          <Route path="/countries/:code" component={Country} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
