import React from "react";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/portfolio" exact>
            <Home />
          </Route>

          <Route path="/portfolio/about" exact>
            <About />
          </Route>

          <Route path="/portfolio/projects" exact>
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
