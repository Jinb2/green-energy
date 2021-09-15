import React, { useEffect } from "react";
import video from "../media/hero-video.mp4";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  // toggling for menu
  useEffect(() => {
    const menuToggle = document.querySelector(".toggle");
    const showcase = document.querySelector(".showcase");

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      showcase.classList.toggle("active");
    });
  });

  return (
    <div>
      <section className="showcase ">
        <header>
          <h2 className="logo"> Sustainability</h2>
          <div className="toggle "></div>
        </header>

        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="text">
          <h2>Go Green</h2>
          <h3>Saving The World</h3>
          <p>
            We only have one Earth. With the planet's average surface
            temperature having risen about 2.12 degrees Farenheit since the late
            19th century, the looming destruction of many animal's homes
            (including ours) require your help.
            <br></br>No more home means no more food, family, all the things you
            love.
          </p>
          <a href="https://climate.nasa.gov/"> Learn more...</a>
        </div>
      </section>

      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/help">Ways to Help</Link>
          </li>
          <li>
            <Link to="/green">A Green Look</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
