import { useState } from "react";
import { projects } from "./data";
import { PopUp } from "./PopUp";
import "./Portfolio.css";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {
  const [popUp, setPopUp] = useState(false);
  const [popUpIndex, setPopUpIndex] = useState(-1);

  const handleClick = (i) => {
    setPopUpIndex(popUpIndex === i ? -1 : i);
    setPopUp(true);
  };

  return (
    <>
      {popUp === false && (
        <section className="portfolio-section sec-padding">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>Recent Work</h2>
              </div>
            </div>
            {/*portfolio item*/}
            <PortfolioItem handleClick={handleClick} />
          </div>
        </section>
      )}
      {projects.map(({ id, created, desc, tech, title, url }, index) => {
        if (index === popUpIndex) {
          return (
            <PopUp
              key={index + id}
              created={created}
              desc={desc}
              tech={tech}
              title={title}
              url={url}
              index={index}
              setPopUpIndex={setPopUpIndex}
              setPopUp={setPopUp}
            />
          );
        }
        return popUp;
      })}
    </>
  );
};
