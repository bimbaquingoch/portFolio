import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Info } from "../contact/Info";

export const Home = () => {
  return (
    <section className="home-section aling-items-center">
      <div className="container">
        <div className="row aling-items-center">
          <div className="home-img">
            <div className="img-box">
              <img
                src="https://avatars.githubusercontent.com/u/52583430?v=4"
                alt="profile-img"
              />
            </div>
          </div>

          <div className="home-text">
            <p>hi! I'm</p>
            <h1>Bryan Imbaquingo</h1>
            <h2>Front end react developer</h2>
            <Link to="/portfolio/about" className="btn" aria-label="About">
              more about me
            </Link>

            <Link
              to="/portfolio/projects"
              className="btn"
              aria-label="Projects"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <Info />
      </div>
    </section>
  );
};
