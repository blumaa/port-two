import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Accordion from "../images/Accordion";
import Close from "../images/Close";

const AccordionTop = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const menu = (
    <div id="top-button-container">
      <div className="one">
        <InstagramIcon />
      </div>
      <div className="two">
        <LinkedInIcon />
      </div>
      <div className="three">
        <MailOutlineIcon />
      </div>
      <div className="four">
        <MailOutlineIcon />
      </div>
    </div>
  );

  return (
    <button onClick={handleClick} className="accordion-button-container">
      {open ? <Close id="close-button" /> : <Accordion className="accordion-button"/>}

      {open ? menu : null}
    </button>
  );
};
export default AccordionTop;
