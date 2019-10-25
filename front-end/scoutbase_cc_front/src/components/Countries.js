import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

const COUNTRIES = gql`
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
    }
  }
`;

export default function Countries() {
  const { loading, error, data } = useQuery(COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex flex-wrap">
      {data.countries.map(({ name, code }) => (
        <Link to={`/countries/${code}`} className="grow ma5 outline" key={code}>
          <p>{name}</p>
        </Link>
      ))}
    </div>
  );

  //
}
