import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "../CSS/Country.css";

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

  const { currency, phone, name } = data.country;

  return (
    <div className="vh-100 dt w-100 bg-black red tc bounce-in-bck">
      <Link className="f1 link light-purple text-focus-in" to="/countries">
        Go Back
      </Link>

      <div classNAme="dtc v-mid tc white ph3 ph4-l">
        <p className="f6 f2-m f-subheadline-l fw6 tc">{name}</p>
        <p className="f6 f2-m f-subheadline-l fw6 tc text-flicker-in-glow">
          {" "}
          Area code: {phone}
        </p>
        <p className="f6 f2-m f-subheadline-l fw6 tc text-flicker-in-glow">
          $$$->{currency}
        </p>
      </div>
    </div>
  );
}
