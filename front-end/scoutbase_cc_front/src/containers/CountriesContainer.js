import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard.js";
import ApolloClient, { gql } from "apollo-boost";

export default function CountriesContainer() {
  const [countries, setCountries] = useState([]);

  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com"
  });

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            countries {
              name
              code
              continent {
                name
              }
              languages {
                native
              }
              currency
              phone
            }
          }
        `
      })
      .then(r => setCountries(r.data.countries));
  }, []);

  const renderCountries = countries.map(c => (
    <CountryCard key={c.code} country={c} />
  ));

  return <div>{renderCountries}</div>;
}
//
