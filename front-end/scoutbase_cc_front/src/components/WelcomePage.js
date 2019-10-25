import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <Link className="dtc v-mid tc white ph3 ph4-l" to="/countries">
      <p className="f6 f2-m f-subheadline-l fw6 tc link black tracking-in-contract-bck ">
        <p className="hvr-grow-rotate">click me</p>
      </p>
    </Link>
  );
}
