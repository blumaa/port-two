import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import Chip from "@material-ui/core/Chip";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import ruinemeimg from "../../images/ruinmeimg.svg";
import Button from "@material-ui/core/Button";

const RuinMe = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { language, theme } = useMappedState(mapState);

  let description;

  if (language.language === "spanish") {
    description = "Una aplicación para la gente que quiere mejorar en las citas. Los usuarios pueden dejar sus comentarios pero sólo ver los comentarios de ellos mismos."
  } else if (language.language === "deutsch") {
    description = "Eine App für Menschen, die ihre Erfolgschancen bei der Partnersuche verbessern wollen. Benutzer können Bewertungen hinterlassen, sehen aber nur Bewertungen über sich selbst."
  } else {
    description =
    "An app for people who want to get better at dating. Users can leave reviews but only see reviews of their self."
  }
  
  return (
    <div id="project-container">
            <div id="project-title" style={{ color: theme.theme.buttonText }}>
Ruin Me</div>
      <div id="project-links">
        <Button
          variant="link"
          color="default"
          startIcon={<LinkIcon style={{ color: theme.theme.mainText }}  />}
          href="https://youtu.be/QhCrI42wkWc"
          target="_blank"
          style={{ color: theme.theme.mainText, textTransform: "none" }}
        >
          demo
        </Button>
        <Button
          variant="link"
          color="default"
          startIcon={<GitHubIcon style={{ color: theme.theme.mainText }} />}
          href="https://github.com/blumaa/ruinme-frontend"
          target="_blank"
          style={{ color: theme.theme.mainText, textTransform: "none" }}
        >
          repo
        </Button>
      </div>
      <div id="project-picture">
        {" "}
        <img src={ruinemeimg} />
      </div>
      <div id="project-description" style={{ color: theme.theme.mainText }}>
        {description}
      </div>
      <div id="project-info-container" style={{ color: theme.theme.mainText }}>
        <div id="project-frontend">
          Front end:
          <li>React</li>
          <li>Redux</li>
          <li>JSON Web Tokens</li>
          <li>Active Storage for uploading pictures</li>
          <li>Semantic UI</li>
          <li>Custom CSS</li>
        </div>
        <div id="project-backend">
          Back end:
          <li>Ruby on Rails</li>
          <li>PostgresQL</li>
          <li>Express</li>
        </div>
      </div>
    </div>
  );
};

export default RuinMe;
