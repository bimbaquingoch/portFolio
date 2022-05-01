import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [button, setButton] = useState(false);
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='row flex-end'>
            <button
              onClick={() => setButton(!button)}
              type='button'
              className='nav-toggler'>
              <span></span>
            </button>
            {button && (
              <nav className='nav'>
                <div className='nav-inner'>
                  <ul>
                    <li>
                      <Link
                        onClick={() => {
                          setButton(!button);
                        }}
                        to='/'
                        className='nav-item'
                        aria-label='Home'>
                        <span>home</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={() => {
                          setButton(!button);
                        }}
                        to='/about'
                        className='nav-item'
                        aria-label='About'>
                        <span>about</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={() => {
                          setButton(!button);
                        }}
                        to='/projects'
                        className='nav-item'
                        aria-label='Projects'>
                        <span>portfolio</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
