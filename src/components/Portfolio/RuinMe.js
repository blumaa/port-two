import React from "react";
import Chip from "@material-ui/core/Chip";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import ruinemeimg from "../../images/ruinmeimg.svg";

const RuinMe = () => {
  return (
    <div id="project-container">
      <div id="project-title">Ruin Me</div>
      <div id="project-links">
        <a href="https://youtu.be/QhCrI42wkWc" target="_blank">
          <Chip
            variant="outlined"
            size="small"
            icon={<LinkIcon />}
            label="demo"
          />
        </a>
        <a href="https://github.com/blumaa/ruinme-frontend" target="_blank">
          <Chip
            variant="outlined"
            size="small"
            icon={<GitHubIcon />}
            label="repository"
          />
        </a>
      </div>
      <div id="project-picture">
        {" "}
        <img src={ruinemeimg} />
      </div>
      <div id="project-description">
        An app for people who want to get better at dating. Users can leave
        reviews but only see reviews of their self.
      </div>
      <div id="project-info-container">
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
