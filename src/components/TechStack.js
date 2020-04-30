import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import reactlogo from "../images/react2.svg";
import js from '../images/js.svg'
import redux2 from '../images/redux2.svg'
import apollo from '../images/apollo.svg'
import graphqllogo from '../images/graphql.svg'
import csslogo from '../images/css3.svg'
import htmllogo from '../images/html5-2.svg'
import sasslogo from '../images/sass.svg'
import materialuilogo from '../images/material-ui.svg'

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
                  <div id="icon-title">JavaScript</div>
                  <img src={js} id="icon" />

                </div>
                <div id="icon-container">
                  <img src={reactlogo} id="icon" />
                  <div id="icon-title">React</div>

                </div>
                <div id="icon-container">
                  <div id="icon-title">Redux</div>
                  <img src={redux2} id="icon" />

                </div>
                <div id="icon-container">
                  <img src={graphqllogo} id="icon" />
                  <div id="icon-title">GraphQL</div>

                </div>
                <div id="icon-container">
                  <div id="icon-title">Apollo</div>
                  <img src={apollo} id="icon" />

                </div>

                <div id="icon-container">
                  <img src={csslogo} id="icon" />
                  <div id="icon-title">CSS3</div>

                </div>
                <div id="icon-container">
                  <div id="icon-title">HTML5</div>
                  <img src={htmllogo} id="icon" />

                </div>
                <div id="icon-container">
                  <img src={sasslogo} id="icon" />
                  <div id="icon-title">SASS</div>

                </div>
                <div id="icon-container">
                  <div id="icon-title">Material UI</div>
                  <img src={materialuilogo} id="icon" />

                </div>


              </div>
            </div>
            <div id="back-end">back end</div>
            <div id="database">database</div>
            <div id="other">other</div>
          </div>
          <div className="long-row-bottom">long-row-middle 2</div>
          {/* <div className="long-row-bottom-title">long-row-bottom</div> */}
        </div>
      </div>
    </>
  );
};

export default TechStack;
