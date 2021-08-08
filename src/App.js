import React from "react";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      {/*about section*/}
      {/*portfolio section*/}
      <Portfolio />
    </div>
  );
};

export default App;
