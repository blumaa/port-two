import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
  return (
    <>
      <div id="about-me">
        <div className="grid-container">
          <div className="long-row-top">

              <div id="title-box">
                <div id="title">Aaron Blum</div>
                {/* <div id="sub-title">front end developer</div> */}
              </div>
          </div>
          <div id="about-me-main-container">
            <div id="picture-box">

            </div>
            <div id="title-box">
            <h1 >Example</h1>

            </div>
            <div id="description-box">

            <p>
            Full stack web developer with a passion for teaching. I thrive within an innovative team, one that will challenge me and where I can add my creativity, humor, and coding expertise. My passion for playing music allows me to think outside the box and engineer web applications from a creative, audience oriented perspective. I am excited to connect people through technology in an engaging way, like I helped bridge people through education.

            </p>
            </div>

            </div>
          {/* <div className="long-row-middle-2">long-row-middle</div> */}
          <div className="about-me-bottom-container">long-row-bottom</div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
