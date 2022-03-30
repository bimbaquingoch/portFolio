import "./Home.css";
import { Link } from "react-router-dom";
import { Info } from "../contact/Info";

export const Home = () =>
{
  return (
    <section className="home-section aling-items-center">
      <div className="container">
        <div className="row aling-items-center">
          <div className="home-img">
            <div className="img-box">
              <img
                src="https://avatars.githubusercontent.com/u/52583430?v=4"
                alt="profile-img"
              />
            </div>
          </div>

          <div className="home-text">
            <p><i>hi! I'm</i></p>
            <h1>Bryan Imbaquingo</h1>
            {/* <h2>Frontend react developer</h2> */ }
            <img src="https://readme-typing-svg.herokuapp.com/?color=FFFFFF&lines=Computer+Science+Engineer;Javascript(JS)+developer;+Frontend+React+Developer;Nice+to+meet+you!ฅ^•ﻌ•^ฅ&center=true&size=26" alt="texto_descriptivo"></img>
            <Link to="/about" className="btn" aria-label="About">
              more about me
            </Link>

            <Link to="/projects" className="btn" aria-label="Projects">
              Portfolio
            </Link>
          </div>
        </div>
        <Info />
      </div>
    </section>
  );
};
