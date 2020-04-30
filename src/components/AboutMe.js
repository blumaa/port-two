import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <>
      <div id="about-me">
        <div className="grid-container">
          <div className="about-me-top-container">
            <div id="title-box">
              <div id="title">Aaron Blum</div>
              {/* <div id="sub-title">front end developer</div> */}
            </div>
          </div>
          <div id="about-me-middle-container">
            {/* <div id="picture-box"></div> */}
            <div id="title-box" className="animated fadeInLeft">
            {/* <div id="title-box"> */}
              Hi, my name is Aaron. I'm a front-end developer.
            </div>
            {/* <div id="main-box-one"  > */}
            <div id="main-box-one"  className="animated bounceInLeft slow">
                I bring organization and creativity to every project, as well as
                a relentless drive to realize each clients' dream.
            </div>
          </div>
          {/* <div className="long-row-middle-2">long-row-middle</div> */}
          <div className="about-me-bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two"></div>
            <div id="bottom-three" >
            {/* <div id="bottom-three" className="animated bounceInLeft slower"> */}
              <div id="down-button">
                <Link
                  to="page2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  delay={250}
                >
                  <img
                    src={downarrow}
                    id="accordion-icon"
                    className="animated wobble slower delay-2s"
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

export default AboutMe;
