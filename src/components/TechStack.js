import React, {useCallback} from "react";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import TechStack2 from "./TechStack2/TechStack2";
import { useMappedState } from "redux-react-hook";
import DownArrow from './DownArrow'


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
                  <DownArrow />
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
