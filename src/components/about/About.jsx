import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { education, skils } from "../portfolio/data.js";
import { TimelineItem } from "./TimelineItem";
import { SkilContainer, Skills } from "../StyledComponents";
import "./About.css";

const Education = () => {
  return (
    <div className='tab-content' id='education'>
      <div className='timeline'>
        {education.map((lineItem) => (
          <TimelineItem key={lineItem.id} lineItem={lineItem} />
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className='tab-content' id='experience'>
      <div className='timeline'>
        <div className='timeline-item'>
          <span className='date'></span>
          <h4>Experience</h4>
          <p>See my projects on my portfolio</p>
          <br />
          <Link to='/projects' className='btn'>
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const [eduExp, setEduExp] = useState(false);

  return (
    <section className='about-section sec-padding'>
      <div className='container'>
        <div className='row'>
          <div className='section-title'>
            <h2>about me</h2>
          </div>
        </div>
        <div className='row'>
          <div className='about-img'>
            <div className='img-box'>
              <img
                src='https://avatars.githubusercontent.com/u/52583430?v=4'
                alt='about img'
              />
            </div>
          </div>
          <div className='about-text'>
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
              My develop environment is{" "}
              <b>
                <i>Ubuntu 20.04</i>
              </b>{" "}
              and my favorites text editors are <b>Visual Studio Code </b>
              and <b>Neovim</b>
            </p>
            {/*skills*/}
            <h3>Skills</h3>
            <SkilContainer>
              {skils.map((item) => (
                <Skills key={item}>{item}</Skills>
              ))}
            </SkilContainer>
            {/* education experience*/}
            <div className='about-tabs'>
              <button
                onClick={() => setEduExp(false)}
                type='button'
                className='btn'
                data-target='#'>
                Education
              </button>
              <button
                onClick={() => setEduExp(true)}
                type='button'
                className='btn'
                data-target='#'>
                Experience
              </button>
            </div>
            {eduExp === false ? <Education /> : <Experience />}
            <Link
              href='https://1drv.ms/w/s!AnjI1XaXQb2igqB_e84vkjer0-pzMQ?e=4yTOy2'
              className='btn'
              target='_blank'
              rel='noreferrer'
              aria-label='Download CV'>
              download cv
            </Link>
            <Link to='/' className='btn' aria-label='Contact me'>
              contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
