import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import TPReport from "./Portfolio/TPReport";
import DebtCrusher from "./Portfolio/DebtCrusher";
import RuinMe from "./Portfolio/RuinMe";
import DownArrow from "./DownArrow";
import { gsap, Back, Linear, Elastic, Power3, Bounce } from "gsap";

const Portofolio = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);
  return (
    <>
      <div
        id="portfolio"
        style={{ backgroundColor: theme.theme.backgroundColor }}
      >
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              <div id="title" style={{ color: theme.theme.mainText }}>
                Portfolio
              </div>
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
                  <DownArrow />{" "}
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
