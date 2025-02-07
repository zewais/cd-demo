import React from "react";
import slcLogo from "../assets/slc_black.jpg";

export default function Greeting({ name }) {
  return (
    <div>
      <img src={slcLogo} alt="" width="200px" />
      <h1>Hello, {name || "World!"}</h1>
    </div>
  );
}
