import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import TechStack2 from "./TechStack2/TechStack2"
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Separator1 from './animations/Separator1'


const Main = ({ show }) => {
  return (
    <div id="main-container">
      <div id="page0">
        <Home />
      </div>
      <div id="page1">
        <TechStack />
      </div>
      <>
        <Separator1 />
      </>
      <div id="page2">
        <Portfolio />
      </div>
      <div id="page3">
        <AboutMe />
      </div>
      <div id="page4">
        <Contact />
      </div>
     
      
    </div>
  );
};

export default Main;
