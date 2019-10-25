import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
    }
  }
`;

export default function Country({ match }) {
  const { code } = match.params;
  const { loading, error, data } = useQuery(COUNTRY, {
    variables: { code }
  });

  console.log(COUNTRY);

  return <div>this is a country</div>;
}
