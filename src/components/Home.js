import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import profilepic from "../images/profile1.svg";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              {/* <div id="title">Aaron Blum</div> */}
              {/* <div id="sub-title">front end developer</div> */}
            </div>
          </div>
          <div id="about-me-middle-container">
            {/* <div id="picture-box"></div> */}
            <div id="title-box">
              {/* <div id="title-box"> */}
              <Typography variant="h4">Hi, I'm Aaron</Typography>
              <Typography
                variant="h6"
                id="sub-header"
                gutterBottom
              >
                developer, educator, writer
              </Typography>
            </div>
            {/* <div id="main-box-one"  > */}
            <div id="main-box-one">
              <div id="main-box-image-container">
                <img src={profilepic} id="main-box-image" />
                <div id="main-box-text">
                  <Typography variant="body1">
                    I bring organization and creativity to every project, as
                    well as a relentless drive to realize each clients' dream.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="long-row-middle-2">long-row-middle</div> */}
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two"><div id="down-button">
                <Link
                  to="page1"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  delay={250}
                >
                  <img
                    src={downarrow}
                    id="accordion-icon"

                  />
                </Link>
              </div></div>
            <div id="bottom-three">
              {/* <div id="bottom-three" className="animated bounceInLeft slower"> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
