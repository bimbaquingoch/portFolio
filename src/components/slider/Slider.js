import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <section>
        <h1>My proyects</h1>
      </section>
      <div className="content-slider">
        <Carousel
          autoPlay
          centerMode
          infiniteLoop
          showThumbs={false}
          stopOnHover
          swipeable
        >
          <div className="carousel">
            <img
              src="https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png"
              alt=""
            />
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a
              href="https://github.com/bimbaquingoch/newNvcode"
              target="_blank"
            >
              <p className="legend" style={{ fontSize: "2.2rem" }}>
                My text editor
              </p>
            </a>
          </div>
          <div className="carousel">
            <img
              src="https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png"
              alt=""
            />
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a
              href="https://github.com/bimbaquingoch/newNvcode"
              target="_blank"
            >
              <p className="legend" style={{ fontSize: "3rem" }}>
                My text editor
              </p>
            </a>
          </div>
          <div className="carousel">
            <img
              src="https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png"
              alt=""
            />
            {/*eslint-disable-next-line react/jsx-no-target-blank*/}
            <a
              href="https://github.com/bimbaquingoch/newNvcode"
              target="_blank"
            >
              <p className="legend" style={{ fontSize: "3rem" }}>
                My text editor
              </p>
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
