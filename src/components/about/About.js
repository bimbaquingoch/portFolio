import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-container_desc">
        <h3>About me</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
          veritatis corporis saepe nam cupiditate? Officia sunt eaque error
          saepe numquam facere. Consequatur at labore incidunt eligendi
          necessitatibus placeat aliquid.
        </p>
      </div>
      <div className="about-container__img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
