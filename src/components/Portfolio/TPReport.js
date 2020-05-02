import React from "react";
import tpreportimg from "../../images/tpreport.svg";
import Chip from "@material-ui/core/Chip";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const TPReport = () => {
  return (
    <div id="project-container">
      <div id="project-title">TP Report</div>
      <div id="project-links">
        <a href="https://www.tp-report.com" target="_blank">
          <Chip
            variant="outlined"
            size="small"
            icon={<LinkIcon />}
            label="tp-report.com"
          />
        </a>
        <a href="https://github.com/blumaa/tp-report-frontend" target="_blank">
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
        <img src={tpreportimg} />
      </div>
        <div id="project-description">
          During this strange, Corona-virus time I wanted to create an easy to
          use app that would help increase social distancing by allowing users
          to report and check if stores do or do not have toilet paper.
        </div>
      <div id="project-info-container">
        <div id="project-frontend">
          Front end: 
              <li>
              React and React Hooks
              </li>
              <li>
              Redux
              </li>
              <li>
              GraphQL 
              </li>
              <li>
              Apollo 
              </li>
              <li>
              Material UI 
              </li>
              <li>
              Custom CSS
              </li>
              <li>
              Integrated Google Maps API
              </li>
              <li>
              Responsive design
              </li>
        </div>
        <div id="project-backend">
          Back end: 
          <li>
              Node.js
          </li>
          <li>
              Mongo DB Atlas
          </li>
          <li>
              Mongoose/Express
          </li>
          <li>
              GraphQL
          </li>
        </div>
      </div>
    </div>
  );
};

export default TPReport;
