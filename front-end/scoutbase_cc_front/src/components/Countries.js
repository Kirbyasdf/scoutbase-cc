import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import "../CSS/Countries.css";

const COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
      continent {
        name
      }
      languages {
        name
        native
      }
    }
  }
`;

export default function Countries() {
  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading)
    return (
      <p className="text-blur-out f2-m f-subheadline-l fw6 dtc v-mid tc white ph3 ph4-l">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-flicker-in-glow f2-m f-subheadline-l fw6 dtc v-mid tc white ph3 ph4-l">
        Error :(
      </p>
    );

  const renderLanguagesName = languages => {
    return languages.map(l => <p>{l.name} </p>);
  };

  const renderLanguagesNative = languages => {
    return languages.map(l => (l.name != l.native ? <p>{l.native} </p> : null));
  };

  return (
    <div className="flex flex-wrap justify-around tc bg-dark-red">
      {data.countries.map(({ name, code, continent, languages, emoji }) => (
        <Link
          to={`/countries/${code}`}
          className="br2 fade-in-fwd hvr-shutter-out-vertical bg-near-black white grow ma2 fl w-100 w-50-m w-25-ns pa2-ns link "
        >
          <div className="f1 rotate-in-ver ">{emoji}</div>

          <p className="f5 f4-ns mb0 ">{name}</p>
          <p className="f6 f5 fw4 mt2 ">{continent.name}</p>
          <dt class="f6 b">Languages</dt>

          <label className="f5 fw4 mt2  ">
            {renderLanguagesName(languages)}
          </label>
          <label className="f5 fw4 mt2 ">
            <div>{renderLanguagesNative(languages)}</div>
          </label>
        </Link>
      ))}
    </div>
  );

  //
}
