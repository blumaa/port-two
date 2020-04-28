import React from "react";
import AccordionTop from "../discard/AccordionTop";
import Accordion from "../images/Accordion";
import AccordionUpperLeft from './AccordionUpperLeft'

const Navbar = ({flipSwitch}) => {
  return (
    <div id="navbar-container">
      
      <AccordionUpperLeft flipSwitch={flipSwitch}/>
      <div className="item2">
        
      </div>
      <div className="item3"></div>
    </div>
  );
};

export default Navbar;
