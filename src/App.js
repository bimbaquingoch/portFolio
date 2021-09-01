import React from "react";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";
// import { Header } from "./components/header/Header";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      {/*<Header />*/}
      <Home />
      {/*about section*/}
      <About />
      {/*portfolio section*/}
      <Portfolio />
      {/*contact section*/}
      <Contact />
    </div>
  );
};

export default App;
