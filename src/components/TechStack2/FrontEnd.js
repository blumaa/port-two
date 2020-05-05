import React, {useCallback} from "react";
import { useMappedState } from "redux-react-hook";
import reactlogo from "../../images/react2.svg";
import js from "../../images/js.svg";
import redux2 from "../../images/redux2.svg";
import apollo from "../../images/apollo.svg";
import graphqllogo from "../../images/graphql.svg";
import csslogo from "../../images/css3.svg";
import htmllogo from "../../images/html5-2.svg";
import sasslogo from "../../images/sass.svg";
import materialuilogo from "../../images/material-ui.svg";

const FrontEnd = () => {

  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState
    };
  }, []);

  const { theme } = useMappedState(mapState);

  return (
    <div id="individual-stack-container">
      <div id="stack-title" style={{color: theme.theme.buttonText}}> frontend</div>
      <div id="stack-icon-container">
        <div>
          <div id="icon-container">
            <img src={js} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>JavaScript</div>
          </div>
          <div id="icon-container">
            <img src={reactlogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>React</div>
          </div>
          <div id="icon-container">
            <img src={redux2} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>Redux</div>
          </div>
          <div id="icon-container">
            <img src={graphqllogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>GraphQL</div>
          </div>
          <div id="icon-container">
            <img src={apollo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>Apollo</div>
          </div>

          <div id="icon-container">
            <img src={csslogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>CSS3</div>
          </div>
          <div id="icon-container">
            <img src={htmllogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>HTML5</div>
          </div>
          <div id="icon-container">
            <img src={sasslogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>SASS</div>
          </div>
          <div id="icon-container">
            <img src={materialuilogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>Material UI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
