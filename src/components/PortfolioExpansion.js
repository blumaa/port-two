import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import tpreportimg from "../images/tpreport.svg";
import debtcrusherimg from "../images/debtcrusher.svg";

const ExpansionPanel = withStyles({
  root: {
    width: "100%",

    backgroundColor: "#ffffffe8",
    display: "flex",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "#a1a1a1e8",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    width: "90%",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: 1,
    marginTop: 1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      backgroundColor: "#3d7c47ff",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel
        
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6">TP Report</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            id="port-links-container"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              marginBottom: "10px",
              alignItems: 'center'
            }}
          >
            <a href="https://www.tp-report.com" target="_blank">
              <Chip
                variant="outlined"
                size="small"
                icon={<LinkIcon />}
                label="tp-report.com"
              />
            </a>
            <a
              href="https://github.com/blumaa/tp-report-frontend"
              target="_blank"
            >
              <Chip
                variant="outlined"
                size="small"
                icon={<GitHubIcon />}
                label="repository"
              />
            </a>
          </div>
          <div>
            <Typography variant="body1" gutterBottom>
              <Divider />
              During this strange, Corona-virus time I wanted to create an easy
              to use app that would help increase social distancing by allowing
              users to report and check if stores do or do not have toilet
              paper.{" "}
            </Typography>
              <img src={tpreportimg} style={{ height: "60vw"}} />
            <Typography variant="body1" gutterBottom>
              <Divider />
              Front end: React, React hooks/redux, Apollo/GraphQL, Material Ui,
              and custom CSS to make it responsive.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Back end: NodeJS, Express, Mongoose, Mongo DB Atlas, and GraphQL.
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6">debtCrusher</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            id="port-links-container"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <a
              href="https://debt-crusher-frontend.herokuapp.com/"
              target="_blank"
            >
              <Chip
                variant="outlined"
                size="small"
                icon={<LinkIcon />}
                label="debtCrusher"
              />
            </a>
            <a
              href="https://github.com/blumaa/debtcrusher-frontend"
              target="_blank"
            >
              <Chip
                variant="outlined"
                size="small"
                icon={<GitHubIcon />}
                label="repository"
              />
            </a>
          </div>
          <div>
            <Typography variant="body1" gutterBottom>
              <Divider />A student loan crowdfunding web application to help
              eliminate student loan debt.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Divider />
              <img src={debtcrusherimg} style={{ height: "40vw" }} />
              Front end: React, Redux, JWT Token Authorization, Stripe Payment
              Integration, Semantic UI
            </Typography>
            <Typography variant="body1" gutterBottom>
              Back end: NodeJS, Express, PostgresQL
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6">Ruin Me Dating App</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            id="port-links-container"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
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
          <div>
            <Typography variant="body1" gutterBottom>
              <Divider />
              An app for people who want to get better at dating. Users can
              leave reviews but only see reviews of their self.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Divider />
              Ruby on Rails API backend with endpoints for Users, Matches,
              Reviews, and Messages. React and Redux with Semantic-React for
              styling. JSON Web Tokens and localStorage to store encrypted user
              information client-side. Matching, likes, messages,
              and Active Storage for uploading pictures.
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
