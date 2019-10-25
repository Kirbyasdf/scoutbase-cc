import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      currency
      phone
    }
  }
`;

export default function Country({ match }) {
  const code = match.params.code;
  const { loading, error, data } = useQuery(COUNTRY, {
    variables: { code }
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;

  const { currency, phone } = data.country;

  return <div>{currency + phone}</div>;
}
