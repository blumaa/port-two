import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import reactlogo from "../images/react2.svg";
import js from "../images/js.svg";
import redux2 from "../images/redux2.svg";
import apollo from "../images/apollo.svg";
import graphqllogo from "../images/graphql.svg";
import csslogo from "../images/css3.svg";
import htmllogo from "../images/html5-2.svg";
import sasslogo from "../images/sass.svg";
import materialuilogo from "../images/material-ui.svg";
import downarrow from "../images/downarrow.svg";
import nodelogo from "../images/nodejs.svg";
import rubylogo from "../images/ruby.svg";
import railslogo from "../images/rails2.svg";
import mongologo from "../images/mongodb.svg";
import postgreslogo from "../images/postgres.svg";
import inkscapelogo from "../images/inkscape-logo.svg";
import jestlogo from "../images/jest.svg";
import websocketlogo from "../images/websocket.svg";
import sqllogo from "../images/sql.svg";
import stripelogo from "../images/stripe.svg";
import { Link } from "react-scroll";
import TPReport from "./Portfolio/TPReport";
import DebtCrusher from "./Portfolio/DebtCrusher";
import RuinMe from "./Portfolio/RuinMe";

const Portofolio = () => {
  return (
    <>
      <div id="portfolio">
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              <div id="title">Portfolio</div>
            </div>
          </div>
          <div id="middle-container">
            <TPReport />
            <DebtCrusher />
            <RuinMe />
          </div>
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two">
              <div id="down-button">
                <Link
                  to="page3"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <img src={downarrow} id="accordion-icon" />
                </Link>
              </div>{" "}
            </div>
            <div id="bottom-three"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
