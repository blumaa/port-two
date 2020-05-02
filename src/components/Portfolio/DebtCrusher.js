import React from "react";
import debtcrusherimg from "../../images/debtcrusher.svg";
import Chip from "@material-ui/core/Chip";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";

const DebtCrusher = () => {
  return (
    <div id="project-container">
      <div id="project-title">debtCrusher</div>
      <div id="project-links">
      <Button
          variant="link"
          color="default"
          startIcon={<LinkIcon style={{ color: "#384a6cff" }} />}
          href="https://debt-crusher-frontend.herokuapp.com/"
          target="_blank"
          style={{ color: "#384a6cff" }}
        >debtCrusher</Button>
      <Button
          variant="link"
          color="default"
          startIcon={<GitHubIcon style={{ color: "#384a6cff" }} />}
          href="https://github.com/blumaa/debtcrusher-frontend"
          target="_blank"
          style={{ color: "#384a6cff" }}
        >repo</Button>
      
      </div>
      <div id="project-picture">
        {" "}
        <img src={debtcrusherimg} />
      </div>
      <div id="project-description">
        A student loan crowdfunding web application to help eliminate student
        loan debt.
      </div>
      <div id="project-info-container">
        <div id="project-frontend">
          Front end:
          <li>React</li>
          <li>Redux</li>
          <li>JWT Login Authentication</li>
          <li>Stripe Payment
              Integration</li>
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
