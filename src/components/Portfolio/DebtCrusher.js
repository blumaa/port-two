import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import debtcrusherimg from "../../images/debtcrusher.svg";
import Chip from "@material-ui/core/Chip";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";

const DebtCrusher = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { language, theme } = useMappedState(mapState);

  let description;

  if (language.language === "spanish") {
    description = "Una aplicación web de becas para estudiantes para ayudar a eliminar la deuda de los préstamos estudiantiles."
  } else if (language.language === "deutsch") {
    description = "Eine Crowdfunding-Webanwendung zur Finanzierung von Studentendarlehen, um die Schulden von Studentendarlehen zu beseitigen."
  } else {
    description =
      "A student loan crowdfunding web application to help eliminate student loan debt.";
  }

  return (
    <div id="project-container">
      <div id="project-title" style={{ color: theme.theme.buttonText }}>
        debtCrusher
      </div>
      <div id="project-links">
        <Button
          variant="link"
          color="default"
          startIcon={<LinkIcon style={{ color: theme.theme.mainText }} />}
          href="https://debt-crusher-frontend.herokuapp.com/"
          target="_blank"
          style={{ color: theme.theme.mainText, textTransform: "none" }}
        >
          debtCrusher
        </Button>
        <Button
          variant="link"
          color="default"
          startIcon={<GitHubIcon style={{ color: theme.theme.mainText }} />}
          href="https://github.com/blumaa/debtcrusher-frontend"
          target="_blank"
          style={{ color: theme.theme.mainText, textTransform: "none" }}
        >
          repo
        </Button>
      </div>
      <div id="project-picture">
        {" "}
        <img src={debtcrusherimg} />
      </div>
      <div id="project-description" style={{ color: theme.theme.mainText }}>
        {description}
      </div>
      <div id="project-info-container" style={{ color: theme.theme.mainText }}>
        <div id="project-frontend">
          Front end:
          <li>React</li>
          <li>Redux</li>
          <li>JWT Login Authentication</li>
          <li>Stripe Payment Integration</li>
          <li>Semantic UI</li>
          <li>Custom CSS</li>
        </div>
        <div id="project-backend">
          Back end:
          <li>Node.js</li>
          <li>PostgresQL</li>
          <li>Express</li>
        </div>
      </div>
    </div>
  );
};

export default DebtCrusher;
