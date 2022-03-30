import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { skils } from "../portfolio/data.js";
import styled from "styled-components";

const SkilContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skills = styled.div`
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  border-radius: 20px;
  margin: 0 10px 10px 0;
  padding: 5px 15px;
  text-transform: capitalize;
`;

const Education = () =>
{
  return (
    <div className="tab-content" id="education">
      <div className="timeline">

        <div className="timeline-item">
          <span className="date">2016 - 2022</span>
          <h4>Universidad Politécnica Salesiana</h4>
          <p>Engineer degree: Computer Science Expected: March 2022. </p>
        </div>

        <div className="timeline-item">
          <span className="date">2019 - 2020</span>
          <h4>Cambridge Assessment</h4>
          <p>
            Certificate in ESOL international (entry 3) (Preliminary) Level B1
            Expected: April 2020
          </p>
        </div>

        <div className="timeline-item">
          <span className="date">2021 - ...</span>
          <h4>Udemy</h4>
          <p>React: De 0 a experto (Hooks y MERN) - Fernando Herrera</p>
        </div>

        <div className="timeline-item">
          <span className="date">2021 - ...</span>
          <h4>Udemy</h4>
          <p>React - La Guía Completa: Hooks Context Redux MERN +15 Apps - Juan Pablo De la torre Valdez</p>
        </div>
      </div>
    </div>
  );
};

const Experience = () =>
{
  return (
    <div className="tab-content" id="experience">
      <div className="timeline">
        <div className="timeline-item">
          <span className="date"></span>
          <h4>Experience</h4>
          <p>
            See my projects on  my portfolio
          </p>
          <br />
          <Link to="/projects" className="btn">
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export const About = () =>
{
  const [ eduExp, setEduExp ] = useState( false );

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
              <img
                src="https://avatars.githubusercontent.com/u/52583430?v=4"
                alt="about img"
              />
            </div>
          </div>
          <div className="about-text">
            <p>
              I am 23, ecuadorian fascinated by web technologies, curious and I
              like to learn new technologies, frameworks, libraries, etc.
            </p>
            <br />
            <p>
              My first program language was java, actually I use javascript/
              typescript technologies and I love it!
            </p>
            <br />
            <p>
              My develop environment is{ " " }
              <b>
                <i>Ubuntu 20.04</i>
              </b>{ " " }
              and my favorites text editors are <b>Visual Studio Code </b>
              and <b>Neovim</b>
            </p>
            {/*skills*/ }
            <h3>Skills</h3>
            <SkilContainer>
              { skils.map( ( item ) => (
                <Skills key={ item }>{ item }</Skills>
              ) ) }
            </SkilContainer>
            {/* education experience*/ }
            <div className="about-tabs">
              <button
                onClick={ () => setEduExp( false ) }
                type="button"
                className="tab-item"
                data-target="#"
                style={
                  eduExp === false
                    ? { color: "#e02f6b" }
                    : { color: "var(--letras-cover)" }
                }
              >
                Education
              </button>
              <button
                onClick={ () => setEduExp( true ) }
                type="button"
                className="tab-item"
                data-target="#"
                style={
                  eduExp === true
                    ? { color: "#e02f6b" }
                    : { color: "var(--letras-cover)" }
                }
              >
                Experience
              </button>
            </div>
            { eduExp === false ? <Education /> : <Experience /> }
            {/* contact buttons*/ }
            <a
              href="https://1drv.ms/w/s!AnjI1XaXQb2igqB_e84vkjer0-pzMQ?e=4yTOy2"
              className="btn"
              target="_blank"
              rel="noreferrer"
              aria-label="Download CV"
            >
              download cv
            </a>
            <Link to="/" className="btn" aria-label="Contact me">
              contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
