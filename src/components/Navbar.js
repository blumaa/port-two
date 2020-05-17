import React from "react";
import AccordionTop from "../discard/AccordionTop";
import Accordion from "../images/Accordion";
import AccordionUpperLeft from "./AccordionUpperLeft";
import LanguageSwitch from "./LanguageSwitch";
import MenuMorph from '../components/animations/MenuMorph'

const Navbar = ({ flipSwitch }) => {
  return (
    <div id="navbar-container">
      <MenuMorph />
      {/* <AccordionUpperLeft flipSwitch={flipSwitch} /> */}
      <div className="item2"></div>
      <div className="language">
        {" "}
        <LanguageSwitch />
      </div>
    </div>
  );
};

export default Navbar;
