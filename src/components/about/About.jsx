import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { education, skils } from '../portfolio/data.js';
import { TimelineItem } from './TimelineItem';
import { SkilContainer, Skills } from '../StyledComponents';
import './About.css';

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
          <h4>
            Technical Consultant - <b>Kruger Corporation S.A</b>
          </h4>
          <h5>
            <b>from:</b> August 2022
          </h5>{' '}
          <h5>
            {' '}
            <b>To: </b>I current work here
          </h5>
          <p>
            My main activity is being a full Stack developer at{' '}
            <b>Kruger Corporation S.A</b>, here I was included in differents
            proyects using react with typescript, tailwind and module federation
            for the frontend. For the backend part I worked with NestJS,
            PotsgreSQL in particular building REST API services. In other case I
            have done frontend with Angular and backend with Spring Boot
          </p>
        </div>
      </div>
      <div className='timeline'>
        <div className='timeline-item'>
          <span className='date'></span>
          <h4>More Experience</h4>
          <p>Watch some of my first projects</p>
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

  const birthDateString = '1998-04-03';
  const birthDate = new Date(birthDateString);
  const currentDate = new Date();
  const ageInMiliseconds = currentDate - birthDate;

  const ageInYears = ageInMiliseconds / (1000 * 60 * 60 * 24 * 365.25);
  const age = Math.floor(ageInYears);

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
            <a
              href='https://github.com/bimbaquingoch/resume/raw/master/Bryan_ImbaquingoCV.pdf'
              className='btn'
              target='_blank'
              rel='noreferrer'
              aria-label='Download CV'
            >
              download cv
            </a>
            <Link to='/' className='btn' aria-label='Contact me'>
              contact me
            </Link>
            <p>
              I am {age}, ecuadorian fascinated by web technologies, curious and
              I like to learn new technologies, frameworks, libraries, etc.
            </p>
            <br />
            <p>
              My first programming language was java, nowadays I use
              javascript/typescript technologies and I love it!
            </p>
            <br />
            <p>
              My favorites text editors are <b>Visual Studio Code </b>
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
                data-target='#'
              >
                Education
              </button>
              <button
                onClick={() => setEduExp(true)}
                type='button'
                className='btn'
                data-target='#'
              >
                Experience
              </button>
            </div>
            {eduExp === false ? <Education /> : <Experience />}
          </div>
        </div>
      </div>
    </section>
  );
};
