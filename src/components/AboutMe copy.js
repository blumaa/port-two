import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import ReactGoogleSlides from "react-google-slides";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

const AboutMe = () => {
  const classes = useStyles();

  return (
    <>
      <div id="about-me">
        <div className="grid-container">
          <div className="about-me-top-container">
            <div id="title-box">
              <div id="title">About Me</div>
              {/* <div id="sub-title">front end developer</div> */}
            </div>
          </div>
          <div id="about-me-middle-container">
            <div id="main-box-two">
              I'm a software developer from Chicago, Illinois, USA, currently
              living in Berlin, Germany. I am most experienced in creating
              organized, dynamic, single page applications using React-Redux,
              Javascript, and SASS for extra styling. I use MongoDB, Node.js,
              PostgresQL, and Ruby on Rails to create RESTful service oriented
              architectures (SOA) on the backend. Recently I've worked with
              GraphQL and Apollo for unique API fetching and I love learning new
              technologies.
            </div>
            <div id="main-box-one">
              <a
                href="https://docs.google.com/presentation/d/1DNLZK_Xp47mkg-24l70f8sTM87Z8GW2O2wHDrWeEWAg/edit?usp=sharing"
                target="_blank"
              >
                <Button
                  classes={{
                    root: classes.root,
                  }}
                >
                  View My CV
                </Button>
              </a>
              <a href="https://github.com/blumaa" target="_blank">
                <Button
                  classes={{
                    root: classes.root,
                  }}
                >
                  View My Github
                </Button>
              </a>
            </div>
            <div id="title-box-one">
              I have a background in education and music that pushes me to think
              outside the coding box. I love learning languages (I speak Spanish
              and I'm learning Deutsch). This helps drive me to increase my
              knowledge of Javascript, Ruby, and many other web frameworks.
            </div>
          </div>
          <div className="about-me-bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two"></div>
            <div id="bottom-three">
              {/* <div id="bottom-three" className="animated bounceInLeft slower"> */}
              <div id="down-button">
                <Link
                  to="page4"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
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
