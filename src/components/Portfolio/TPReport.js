import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import tpreportimg from "../../images/tpreport.svg";
import tpmobile from "../../images/tpmobile.svg";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";

const TPReport = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { language, theme } = useMappedState(mapState);

  let description;

  if (language.language === "spanish") {
    description = "Durante esta extraña época del virus de la Corona quise crear una aplicación fácil de usar que ayudara a aumentar el distanciamiento social permitiendo a los usuarios informar y comprobar si las tiendas tienen o no papel higiénico.";
  } else if (language.language === "deutsch") {
    description = "Während dieser merkwürdigen Zeit des Coronavirus habe ich eine einfach zu bedienende App entwickelt, die die soziale Distanzierung unterstützt, indem sie unnötige Supermarkt-Besuche vermeidet:  Sie ermöglicht Nutzern zu melden und zu überprüfen, ob es in den Geschäften Toilettenpapier gibt oder nicht.";
  } else {
    description =
      "During this strange, Corona-virus time I wanted to create an easy to use app that would help increase social distancing by allowing users to report and check if stores do or do not have toilet paper.";
  }

  return (
    <div id="project-container">
      <div id="project-title" style={{ color: theme.theme.buttonText }}>
        TP Report
      </div>
      <div id="project-links">
        <Button
          variant="link"
          color="default"
          startIcon={<LinkIcon style={{ color: theme.theme.mainText }} />}
          href="https://www.tp-report.com"
          target="_blank"
          style={{ color: theme.theme.mainText, textTransform: "none" }}
        >
          tp-report.com
        </Button>
        <Button
          variant="link"
          color="default"
          startIcon={<GitHubIcon style={{ color: theme.theme.mainText }} />}
          href="https://github.com/blumaa/tp-report-frontend"
          target="_blank"
          style={{ color: theme.theme.mainText, textTransform: "none" }}
        >
          repo
        </Button>
      </div>
      <div id="project-picture">
        {" "}
        <img src={tpreportimg} />
        <img src={tpmobile} />
      </div>
      <div id="project-description" style={{ color: theme.theme.mainText }}>
        {description}
      </div>
      <div id="project-info-container" style={{ color: theme.theme.mainText }}>
        <div id="project-frontend">
          Front end:
          <li>React and React Hooks</li>
          <li>Redux</li>
          <li>GraphQL</li>
          <li>Apollo</li>
          <li>Material UI</li>
          <li>Custom CSS</li>
          <li>Integrated Google Maps API</li>
          <li>Responsive design</li>
        </div>
        <div id="project-backend">
          Back end:
          <li>Node.js</li>
          <li>Mongo DB Atlas</li>
          <li>Mongoose/Express</li>
          <li>GraphQL</li>
        </div>
      </div>
    </div>
  );
};

export default TPReport;
