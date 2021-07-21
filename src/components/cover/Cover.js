import React from "react";
import "./Cover.css";
import video from "../../media/video.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video
        className="cover-container__video"
        src={video}
        alt="video"
        autoPlay
        loop
        muted
      />
      <p>Gokyan</p>
      <img
        src="https://readme-typing-svg.herokuapp.com/?lines=Welcome!...;ฅ^•ﻌ•^ฅ;Nice+to+meet+you!&center=true&size=30"
        alt="cover message"
      />
    </div>
  );
};

export default Cover;
