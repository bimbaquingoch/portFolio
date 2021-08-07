import { useState } from "react";
import "./Portfolio.css";
const projects = [
  {
    id: 1,
    desc: "lorem ipsum",
    title: "proyecto1",
    img: "https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png",
    created: "date",
    tech: "tecnologies",
    url: "url",
  },
  {
    id: 2,
    title: "proyecto 2",
    img: "https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png",
    created: "date",
    tech: "tecnologies",
    url: "url",
  },
  {
    id: 3,
    title: "proyecto 2",
    img: "https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png",
    created: "date",
    tech: "tecnologies",
    url: "url",
  },
  {
    id: 4,
    title: "proyecto 2",
    img: "https://raw.githubusercontent.com/bimbaquingoch/newNvcode/master/utils/images/neovim.png",
    created: "date",
    tech: "tecnologies",
    url: "url",
  },
];

export const Portfolio = () => {
  const [popUp, setPopUp] = useState(false);
  const [popUpIndex, setPopUpIndex] = useState(-1);

  const handleClick = (i) => {
    setPopUpIndex(popUpIndex === i ? -1 : i);
    // setPopUp(true);
    console.log(i);
  };

  const Popup = ({ created, desc, tech, url }) => {
    return (
      <div className="portfolio-popup">
        <div className="pp-inner">
          <div className="pp-content">
            <div className="pp-header">
              <button
                onClick={() => {}}
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
              <h3>proyecto1</h3>
            </div>
            <div className="pp-body">
              <div className="description">
                <p>{desc}</p>
              </div>
              <div className="general-info">
                <ul>
                  <li>Created: {created}</li>
                  <li>Technologies: {tech}</li>
                  <li>View on: {url}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="portfolio-section sec-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Recent Work</h2>
            </div>
          </div>
          <div className="row">
            {/*portfolio item*/}
            {projects.map(({ title, img, id, created, tech, url }, index) => (
              <div key={id} className="portfolio-item">
                <div className="portfolio-item-thumbnail">
                  <img src={img} alt={title} />
                </div>
                <h3 className="portfolio-item-title">{title}</h3>
                <p>{index}</p>
                <button
                  onClick={() => handleClick(index)}
                  className="btn view-project-btn"
                >
                  view project
                </button>
                {popUp === true && (
                  <Popup
                    key={index}
                    created={created}
                    tech={tech}
                    url={url}
                    index={index}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
