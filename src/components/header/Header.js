import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row flex-end">
          <button type="button" className="nav-toggler">
            <span></span>
          </button>
          <nav className="nav">
            <div className="nav-inner">
              <ul>
                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="#" className="nav-item">
                    home
                  </a>
                </li>

                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="#" className="nav-item">
                    about
                  </a>
                </li>

                <li>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="#" className="nav-item">
                    portfolio
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
