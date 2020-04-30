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

const TechStack = () => {
  return (
    <>
      <div id="tech-stack">
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              <div id="title">Tech Stack</div>
              {/* <div id="sub-title">front end developer</div> */}
            </div>
          </div>
          <div className="long-row-middle-1">
            <div id="front-end">
              <div id="front-end-title">Front End</div>
              <div id="container">
                <div id="icon-container">
                  <img src={js} id="icon" />
                  <div id="icon-title">JavaScript</div>
                </div>
                <div id="icon-container">
                  <img src={reactlogo} id="icon" />
                  <div id="icon-title">React</div>
                </div>
                <div id="icon-container">
                  <img src={redux2} id="icon" />
                  <div id="icon-title">Redux</div>
                </div>
                <div id="icon-container">
                  <img src={graphqllogo} id="icon" />
                  <div id="icon-title">GraphQL</div>
                </div>
                <div id="icon-container">
                  <img src={apollo} id="icon" />
                  <div id="icon-title">Apollo</div>
                </div>

                <div id="icon-container">
                  <img src={csslogo} id="icon" />
                  <div id="icon-title">CSS3</div>
                </div>
                <div id="icon-container">
                  <img src={htmllogo} id="icon" />
                  <div id="icon-title">HTML5</div>
                </div>
                <div id="icon-container">
                  <img src={sasslogo} id="icon" />
                  <div id="icon-title">SASS</div>
                </div>
                <div id="icon-container">
                  <img src={materialuilogo} id="icon" />
                  <div id="icon-title">Material UI</div>
                </div>
              </div>
            </div>
            <div id="back-end">
              <div id="back-end-title">Back End</div>

              <div id="container">
                <div id="icon-container">
                  <img src={nodelogo} id="icon" />
                  <div id="icon-title">Node Js</div>
                </div>
                <div id="icon-container">
                  <img src={rubylogo} id="icon" />
                  <div id="icon-title">Ruby</div>
                </div>
                <div id="icon-container">
                  <img src={railslogo} id="icon" />
                  <div id="icon-title">Ruby on Rails</div>
                </div>
              </div>
            </div>{" "}
            <div id="database">
              <div id="database-title">Database</div>

              <div id="container">
                <div id="icon-container">
                  <img src={mongologo} id="icon" />
                  <div id="icon-title">Mongo DB</div>
                </div>
                <div id="icon-container">
                  <img src={postgreslogo} id="icon" />
                  <div id="icon-title">PostgresQL</div>
                </div>
               
              </div>
            </div>{" "}
            <div id="other">
              <div id="other-title">Other</div>

              <div id="container">
                <div id="icon-container">
                  <img src={inkscapelogo} id="icon" />
                  <div id="icon-title">Inkscape</div>
                </div>
                <div id="icon-container">
                  <img src={jestlogo} id="icon" />
                  <div id="icon-title">Jest</div>
                </div>
                <div id="icon-container">
                  <img src={sqllogo} id="icon" />
                  <div id="icon-title">SQL</div>
                </div>
                <div id="icon-container">
                  <img src={stripelogo} id="icon" />
                  <div id="icon-title">Stripe Payments</div>
                </div>
                <div id="icon-container">
                  <img src={websocketlogo} id="icon" />
                  <div id="icon-title">Web Sockets</div>
                </div>
                
              </div>
            </div>{" "}
          </div>
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
          {/* <div className="long-row-bottom">long-row-middle 2</div> */}
          {/* <div className="long-row-bottom-title">long-row-bottom</div> */}
        </div>
      </div>
    </>
  );
};

export default TechStack;
