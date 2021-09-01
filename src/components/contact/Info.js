import React from "react";
import "./Contact.css";

const social = [
  {
    id: 0,
    alt: "github",
    img: "https://img.icons8.com/fluency/48/000000/github.png",
    url: "https://github.com/bimbaquingoch",
  },
  {
    id: 1,
    alt: "linkedin",
    img: "https://img.icons8.com/color/48/000000/linkedin.png",
    url: "https://www.linkedin.com/in/bryan-imbaquingo-almagro-636a90168/",
  },
  {
    id: 2,
    alt: "instagram",
    img: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
    url: "https://www.instagram.com/bryandresimba/",
  },
  {
    id: 3,
    alt: "twitter",
    img: "https://img.icons8.com/color/48/000000/twitter--v1.png",
    url: "https://twitter.com/bryandresimba",
  },
];

export const Info = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-item">
        <h3>
          email:<p>bryan_3871@hotmail.com</p>
        </h3>
      </div>
      <div className="contact-info-item">
        <h3>
          phone:<p>+593 963 766 640</p>
        </h3>
      </div>

      <div className="contact-info-item">
        <div className="social-links">
          {social.map(({ img, url, alt, id }) => (
            <a key={id} href={url} target="_blank" rel="noreferrer">
              <img src={img} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
