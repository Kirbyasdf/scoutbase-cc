import React from "react";
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
    <div className="bg-near-black flex flex-wrap">
      {data.countries.map(({ name, code }) => (
        <Link
          to={`/countries/${code}`}
          className="w4 ba3 b-yellow outline  bg-white black hover-white hover-bg-black link grow ma5 "
        >
          <p className="ma3">{name}</p>
        </Link>
      ))}
    </div>
  );

  //
}
