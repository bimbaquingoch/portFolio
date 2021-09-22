import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [button, setButton] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row flex-end">
            <button
              onClick={() => setButton(!button)}
              type="button"
              className="nav-toggler"
            >
              <span></span>
            </button>
            {button ? (
              <nav className="nav">
                <div className="nav-inner">
                  <ul>
                    <li>
                      <Link
                        onClick={() => {
                          setButton(!button);
                        }}
                        to="/home"
                        className="nav-item"
                      >
                        home
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={() => {
                          setButton(!button);
                        }}
                        to="/about"
                        className="nav-item"
                      >
                        about
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={() => {
                          setButton(!button);
                        }}
                        to="/portfolio"
                        className="nav-item"
                      >
                        portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            ) : (
              console.log("hola")
            )}
          </div>
        </div>
      </header>
    </>
  );
};
