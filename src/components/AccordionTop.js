import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Accordion from "../images/Accordion";
import Close from "../images/Close";
import Drawer1 from '../images/drawer1.svg'
import close from '../images/close.svg'

const AccordionTop = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const menu = (
    <div id="button-container">
      <div className="button-one">
        {/* <InstagramIcon /> */}
        Tech Stack
      </div>
      <div className="button-two">
        {/* <LinkedInIcon /> */}
      </div>
      <div className="button-three">
        {/* <MailOutlineIcon /> */}
      </div>
      <div className="button-four">
        {/* <MailOutlineIcon /> */}
      </div>
    </div>
  );

  return (
    <>
    <button onClick={handleClick} className="accordion-button-container">
      {open ? <img src={close} id="close-icon" /> :  <img src={Drawer1} id="accordion-icon" />}

      {open ? menu : null}
    </button>
      </>
  );
};
export default AccordionTop;
