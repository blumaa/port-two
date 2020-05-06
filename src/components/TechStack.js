import React, {useCallback} from "react";
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
import TechStack2 from "./TechStack2/TechStack2";
import { useMappedState } from "redux-react-hook";

const TechStack = () => {

  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState
    };
  }, []);

  const { theme } = useMappedState(mapState);
  return (
    <>
      <div id="tech-stack" style={{backgroundColor: theme.theme.backgroundColor}} >
        <div className="grid-container" data-aos="fade-in">
          <div className="top-container">
            <div id="title-box">
              <div id="title" style={{color: theme.theme.mainText}}>Tech Stack</div>
            </div>
          </div>
          <div id="middle-container">
            <TechStack2 />
          </div>
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two">
              <div id="down-button">
                <Link
                  to="page2"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <img src={downarrow} id="accordion-icon" />
                </Link>
              </div>
            </div>
            <div id="bottom-three">
              {/* <div id="bottom-three" className="animated bounceInLeft slower"> */}
            </div>
          </div>
          {/* <div className="long-row-bottom">long-row-middle 2</div> */}
          {/* <div className="long-row-bottom-title">long-row-bottom</div> */}
        </div>
      </div>
    </>
  );
};

export default TechStack;
