import React, { useState } from "react";
import aboutImg from "../../media/about-img.png";
import "./About.css";

const Education = () => {
  return (
    <div className="tab-content" id="education">
      <div className="timeline">
        <div className="timeline-item">
          <span className="date">2013-2016</span>
          <h4>holaaaa</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dolores maxime repudiandae, molestias ratione iste praesentium
            tempora nobis incidunt inventore exercitationem aut ab atque
            adipisci expedita. Fuga nesciunt sit saepe?
          </p>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="tab-content" id="experience">
      <div className="timeline">
        <div className="timeline-item">
          <span className="date"></span>
          <h4>
            Experiencia <span>pagina random</span>
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            dignissimos ea amet nemo, delectus eaque?
          </p>
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const [eduExp, setEduExp] = useState(false);
  const skils = [
    "html",
    "css",
    "Javascript",
    "python",
    "react",
    "angular",
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
            {/*skills*/}
            <h3>Skills</h3>
            <div className="skills">
              {skils.map((item) => (
                <div className="skill-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
            {/* education experience*/}
            <div className="about-tabs">
              <button
                onClick={() => setEduExp(false)}
                type="button"
                className="tab-item"
                data-target="#"
                style={
                  eduExp === false ? { color: "#ff005d" } : { color: "#18293c" }
                }
              >
                Education
              </button>
              <button
                onClick={() => setEduExp(true)}
                type="button"
                className="tab-item"
                data-target="#"
                style={
                  eduExp === true ? { color: "#ff005d" } : { color: "#18293c" }
                }
              >
                Experience
              </button>
            </div>
            {eduExp === false ? <Education /> : <Experience />}
            {/* contact buttons*/}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" className="btn">
              download cv
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#" className="btn">
              contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
