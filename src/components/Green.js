import React from "react";
import Navbar from "./Navbar";
import Meteostat from "./Meteostat";
import "../styles/green.css";

const Green = () => {
  return (
    <div className="green">
      <Navbar />
      <div className="hero">
        <h1>Global Warming Live Graphs</h1>
      </div>
      <h1 id="hook">
        Don't believe climate change is real? <br></br>See it for yourself
        through the years.
      </h1>

      <Meteostat />
    </div>
  );
};

export default Green;
