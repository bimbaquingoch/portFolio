import React from "react";
import { projects } from "./data";

export const PortfolioItem = ({ handleClick }) => {
  return (
    <div className="row">
      {projects.map(({ title, img }, index) => (
        <div key={`id ${index}`} className="portfolio-item">
          <div className="portfolio-item-thumbnail">
            <img src={img} alt={title} />
          </div>
          <h3 className="portfolio-item-title">{title}</h3>
          <button
            onClick={() => handleClick(index)}
            className="btn view-project-btn"
          >
            view project
          </button>
        </div>
      ))}
    </div>
  );
};
