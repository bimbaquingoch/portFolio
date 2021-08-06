import React from "react";
import aboutImg from "../../media/about-img.png";
import "./About.css";

export const About = () => {
  const skils = [
    "html",
    "css",
    "Javascript",
    "ReactJS",
    "bootstrap",
    "bulma css",
    "material UI",
    "Git",
    "Github",
    "Terminal",
    "Neovim",
    "NodeJS",
    "MongoDB",
  ];
  return (
    <section className="about-section sec-padding">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src={aboutImg} alt="about img" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              cupiditate ex fugiat quis unde. Eius debitis cum eligendi amet
              mollitia aliquid libero eaque ab vitae quo repellendus, autem eum
              minus.
            </p>

            <h3>Skills</h3>
            <div className="skills">
              {skils.map((item) => (
                <div className="skill-item" key={item}>
                  {item}
                </div>
              ))}
            </div>

            <div className="about-tabs">
              <button type="button" className="tab-item active" data-target="#">
                Education
              </button>
              <button type="button" className="tab-item" data-target="#">
                Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
