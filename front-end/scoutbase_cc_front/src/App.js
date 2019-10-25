import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import "./App.css";

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
      <div className="vh-100 dt w-100 bg-dark-pink">
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/countries" component={Countries} />
            <Route path="/countries/:code" component={Country} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
