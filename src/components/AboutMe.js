import React from "react";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";

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
          <div className="top-container">
            <div id="title-box">
              <div id="title">About Me</div>
            </div>
          </div>
          <div id="middle-container">
            <div id="description-one">
              I'm a software developer from Chicago, Illinois, USA, currently
              living in Berlin, Germany. I am most experienced in creating
              organized, dynamic, single page applications using React-Redux,
              Javascript, and SASS for extra styling. I use MongoDB, Node.js,
              PostgresQL, and Ruby on Rails to create RESTful service oriented
              architectures (SOA) on the backend. Recently I've worked with
              GraphQL and Apollo for unique API fetching and I love learning new
              technologies.
            </div>
            <div id="links">
              {/* <Chip
                icon={<CloudDownloadIcon />}
                href="https://drive.google.com/file/d/1V2xJxaN_0R-Slf_geAREuNoO8YLOIkQt/view?usp=sharing"
                target="_blank"
                clickable
                label="Get Formal CV"
              /> */}

              <Button
                href="https://drive.google.com/file/d/1V2xJxaN_0R-Slf_geAREuNoO8YLOIkQt/view?usp=sharing"
                target="_blank"
                startIcon={<CloudDownloadIcon style={{ color: "#ec6543ff" }} />}
                size="small"
                style={{ color: "#384a6cff" }}
              >
                Formal CV
              </Button>
              <Button
                startIcon={<GitHubIcon style={{ color: "#ec6543ff" }} />}
                href="https://github.com/blumaa"
                target="_blank"
                size="small"
                style={{ color: "#384a6cff" }}
              >
                My GitHub
              </Button>
            </div>
            <div id="description-two">
              I have a background in education and music that pushes me to think
              outside the coding box. I love learning languages (I speak Spanish
              and I'm learning Deutsch). This helps drive me to increase my
              knowledge of Javascript, Ruby, and many other web frameworks. My
              experience as a teacher of English as a Second Language for over
              ten years transformed me into an excellent manager, communicator,
              and made me really comfortable working closely with people.
            </div>
          </div>
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two">
              <div id="down-button">
                <Link
                  to="page4"
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

export default AboutMe;
