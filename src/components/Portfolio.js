import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";
import downarrow from "../images/downarrow.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PortfolioExpansion from './PortfolioExpansion'

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
const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <div id="portfolio">
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              <div id="title">Portfolio</div>
              {/* <div id="sub-title">front end developer</div> */}
            </div>
          </div>
          <div id="about-me-middle-container">
            {/* <PortfolioExpansion /> */}
          </div>
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two"></div>
            <div id="bottom-three">
              {/* <div id="bottom-three" className="animated bounceInLeft slower"> */}
              <div id="down-button">
                <Link
                  to="page3"
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

export default Portfolio;
