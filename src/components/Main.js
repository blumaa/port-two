import React from "react";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Main = ({ show }) => {
  return (
    <div id="main-container">
      <div id="page1">
        <AboutMe />
      </div>
      <div id="page2">
        <TechStack />
      </div>
      <div id="page3">
        <Portfolio />
      </div>
      <div id="page4">
        <Contact />
      </div>
      {/* <Route path="/" exact render={(props) => <AboutMe {...props} show={show}/>} />
      <Route path="/TechStack" component={TechStack} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} /> */}
    </div>
  );
};

export default Main;
