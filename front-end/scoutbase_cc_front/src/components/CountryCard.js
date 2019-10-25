import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  console.log(country.languages);
  return (
    <div className="flex">
      <div className="flex">{country.name}</div>
    </div>
  );
}
