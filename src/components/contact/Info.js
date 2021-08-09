import React from "react";
import "./Contact.css";

const social = [
  {
    alt: "github",
    img: "https://img.icons8.com/fluency/48/000000/github.png",
    url: "https://github.com/bimbaquingoch",
  },
  {
    alt: "linkedin",
    img: "https://img.icons8.com/color/48/000000/linkedin.png",
    url: "https://www.linkedin.com/in/bryan-imbaquingo-almagro-636a90168/",
  },
  {
    alt: "instagram",
    img: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
    url: "https://www.instagram.com/bryandresimba/",
  },
  {
    alt: "twitter",
    img: "https://img.icons8.com/color/48/000000/twitter--v1.png",
    url: "https://twitter.com/bryandresimba",
  },
];

export const Info = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-item">
        <h3>email</h3>
        <p>bryan_3871@hotmail.com</p>
      </div>
      <div className="contact-info-item">
        <h3>phone</h3>
        <p>+593 963 766 640</p>
      </div>
      <div className="contact-info-item">
        <h3>email</h3>
        <div className="social-links">
          {social.map(({ img, url, alt }) => (
            <a href={url} target="_blank" rel="noreferrer">
              <img src={img} alt={alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
