import React from "react";

export const PopUp = ({
  title,
  created,
  desc,
  tech,
  url,
  img,
  setPopUpIndex,
  setPopUp,
}) => {
  return (
    <div className="portfolio-popup animate__animated animate__fadeIn">
      <div className="pp-inner">
        <div className="pp-content">
          <div className="pp-header">
            <button
              onClick={() => {
                setPopUpIndex(-1);
                setPopUp(false);
              }}
              className="btn pp-close"
              type="button"
              style={{ fontWeight: "800", fontSize: "2rem" }}
            >
              X
            </button>
            <div className="pp-thumbnail">
              <img src={img} alt="hola" />
            </div>
            <h3>{title}</h3>
          </div>
          <div className="pp-body">
            <div className="description">
              <p>{desc}</p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  Created: <span>{created}</span>
                </li>
                <li>
                  Technologies: <span>{tech}</span>
                </li>
                <li>
                  View on:
                  <a
                    className="btn"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{title}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
