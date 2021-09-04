import React from "react";
import Navbar from "./Navbar";
import Meteostat from "./Meteostat";
import "../styles/green.css";

const Green = () => {
  return (
    <div className="green">
      <Navbar />
      <h1>Global temperature anomalies from year 1 to present</h1>
      <Meteostat />
    </div>
  );
};

export default Green;
