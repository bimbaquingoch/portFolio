import React from "react";

export const PopUp = ({
  title,
  created,
  desc,
  tech,
  url,
  setPopUpIndex,
  setPopUp,
}) => {
  return (
    <div className="portfolio-popup">
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
              <img
                src="https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png"
                alt="hola"
              />
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
                  View on: <span>{url}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
