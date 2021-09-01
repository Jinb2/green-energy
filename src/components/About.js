import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>What is climate change</h1>
      <div className="definitions">Evidence</div>
      <div className="definitions">Causes</div>
      <div className="definitions">Effects</div>
      <div className="definitions">Solutions</div>
    </div>
  );
};

export default About;
