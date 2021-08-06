import React from "react";
import "./Home.css";
import profileImg from "../../media/profile-img.png";

export const Home = () => {
  return (
    <section className="home-section aling-items-center">
      <div className="container">
        <div className="row aling-items-center">
          <div className="home-text">
            <p>hi! I'm</p>
            <h1>Bryan Imbaquingo</h1>
            <h2>Front end react developer</h2>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" className="btn">
              more about me
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" className="btn">
              Portfolio
            </a>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={profileImg} alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
