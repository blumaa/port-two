import React from "react";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d3006cff",
    borderRadius: 10,
    border: "0px solid black",
    color: "white",
    boxShadow: "2px 2px 3px 2px rgba(85, 85, 85, 0.747)",
    fontFamily: "'Proza Libre', sans-serif",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <div id="contact">
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              <div id="title">Contact</div>
              {/* <div id="sub-title">front end developer</div> */}
            </div>
          </div>
          <div id="middle-container">
            <div id="title-box-one">Contact Details</div>
            <div id="main-box-one">
              You can reach me at blumaa@gmail.com. You can connect to me on
              these platforms:
            </div>
            <div id="icon-box">

            <a
              href="https://github.com/blumaa"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://github.com/blumaa"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/blumaa"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            </div>
          </div>
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two"></div>
            <div id="bottom-three">
              {/* <div id="bottom-three" className="animated bounceInLeft slower"> */}
              <div id="down-button">
                <Link
                  to="page0"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <img
                    src={downarrow}
                    id="accordion-icon"
                    // className="animated wobble slower delay-2s"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
