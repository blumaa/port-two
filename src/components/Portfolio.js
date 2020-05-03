import React from "react";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import TPReport from "./Portfolio/TPReport";
import DebtCrusher from "./Portfolio/DebtCrusher";
import RuinMe from "./Portfolio/RuinMe";
import Divider from '@material-ui/core/Divider';


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
