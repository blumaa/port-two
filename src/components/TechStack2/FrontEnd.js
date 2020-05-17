import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import reactlogo from "../../images/react2.svg";
import js from "../../images/js.svg";
import redux2 from "../../images/redux2.svg";
import apollo from "../../images/apollo.svg";
import graphqllogo from "../../images/graphql.svg";
import csslogo from "../../images/css3.svg";
import htmllogo from "../../images/html5-2.svg";
import sasslogo from "../../images/sass.svg";
import svglogo from "../../images/svglogo.svg";
import illustratorlogo from "../../images/illustratorlogo.svg";
import greensocklogo from "../../images/greensocklogo.svg";
import materialuilogo from "../../images/material-ui.svg";
import GreenSock from "../animations/GreenSock";

const FrontEnd = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);

  const logos = [
    {
      src: js,
      name: "JavaScript",
    },

    {
      src: reactlogo,
      name: "React",
    },
    {
      src: redux2,
      name: "Redux",
    },
    {
      src: graphqllogo,
      name: "GraphQL",
    },
    {
      src: apollo,
      name: "Apollo",
    },
    {
      src: csslogo,
      name: "CSS3",
    },
    {
      src: htmllogo,
      name: "HTML5",
    },
    {
      src: sasslogo,
      name: "SASS",
    },
    {
      src: materialuilogo,
      name: "Material UI",
    },
    {
      src: illustratorlogo,
      name: "Adobe Ilustrator",
    },
    {
      src: svglogo,
      name: "SVG",
    },
  ];

  const logoList = logos.map((logo) => {
    return (
      <div id="icon-container">
        <img src={logo.src} id="icon" />
        <div id="icon-title" style={{ color: theme.theme.mainText }}>
          {logo.name}
        </div>
      </div>
    );
  });

  return (
    <div id="individual-stack-container">
      <div id="stack-title" style={{ color: theme.theme.buttonText }}>
        {" "}
        frontend
      </div>
      <div id="stack-icon-container">
        {logoList}
        <div id="icon-container">
          <GreenSock />
          <div id="icon-title" style={{ color: theme.theme.mainText }}>
            Green Sock
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
