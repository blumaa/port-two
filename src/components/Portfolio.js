import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <div className="grid-container">
          <div className="long-row-top">
              <div id="title-box">
                <div id="title">Portfolio</div>
                {/* <div id="sub-title">front end developer</div> */}
              </div>
          </div>
          <div className="long-row-middle-1">long-row-middle</div>
          <div className="long-row-middle-2">long-row-middle</div>
          <div className="long-row-bottom-title">long-row-bottom</div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
