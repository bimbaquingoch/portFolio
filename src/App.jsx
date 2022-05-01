import React from "react";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Circles } from "./components/Circles";

import "./App.css";

const App = () => {
  return (
    <div className='main'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/about' exact>
            <About />
          </Route>

          <Route path='/projects' exact>
            <Portfolio />
          </Route>
        </Switch>
      </Router>
      <Circles />
    </div>
  );
};

export default App;
