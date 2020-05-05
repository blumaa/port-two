import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import nodelogo from "../../images/nodejs.svg";
import rubylogo from "../../images/ruby.svg";
import railslogo from "../../images/rails2.svg";
import mongologo from "../../images/mongodb.svg";
import postgreslogo from "../../images/postgres.svg";
const BackEnd = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);

  return (
    <div id="individual-stack-container">
      <div id="stack-title" style={{ color: theme.theme.buttonText }}>
        {" "}
        backend
      </div>
      <div id="stack-icon-container">
        <div>
          <div id="icon-container">
            <img src={nodelogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>Node Js</div>
          </div>
          <div id="icon-container">
            <img src={rubylogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>Ruby</div>
          </div>
          <div id="icon-container">
            <img src={railslogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>Ruby on Rails</div>
          </div>
          <div id="icon-container">
            <img src={mongologo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>Mongo DB</div>
          </div>
          <div id="icon-container">
            <img src={postgreslogo} id="icon" />
            <div id="icon-title" style={{color: theme.theme.mainText}}>PostgresQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
