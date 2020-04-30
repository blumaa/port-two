import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Drawer1 from "../images/drawer1.svg";
import close from "../images/close.svg";
import { Route, NavLink } from "react-router-dom";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#8076a300",
    marginTop: "10vh",
    width: "40vw",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    color: "white",
    height: "60vw",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "left",
    boxShadow: "0 0px 0px 0px rgba(255, 105, 135, .3)",

  },
  list: {
    width: "29vw",
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 10,
    border: '1px solid black',
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    fontFamily: "'Proza Libre', sans-serif"
  },
}, { name: 'MuiButton' });

export default function SwipeableTemporaryDrawer({ flipSwitch }) {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      className={clsx(classes.list, "left")}
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem>
          <Link
            to="page0"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={250}
            onClick={toggleDrawer("left", false)}
          >
            <Button
              classes={{
                root: classes.root,
              }}
            >
              Home
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="page1"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={250}
            onClick={toggleDrawer("left", false)}
          >
            <Button
              classes={{
                root: classes.root,
              }}
            >
              About Me
            </Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            to="page2"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={250}
            onClick={toggleDrawer("left", false)}
          >
            <ListItemText>Tech Stack</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="page3"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={250}
            onClick={toggleDrawer("left", false)}
          >
            <ListItemText>Portfolio</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="page4"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            delay={250}
            onClick={toggleDrawer("left", false)}
          >
            <ListItemText>Contact</ListItemText>
          </Link>
        </ListItem>
      </List>

    </div>
  );

  return (
    <div>
      <React.Fragment>
        <button
          onClick={toggleDrawer("left", true)}
          className="accordion-button-container"
        >
          {state.left ? (
            <img src={close} id="close-icon" />
          ) : (
            <img
              src={Drawer1}
              id="accordion-icon"
              className="animated wobble slower delay-2s"
            />
          )}
        </button>

        {/* <Button onClick={toggleDrawer("left", true)}>Left</Button> */}
        <SwipeableDrawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          classes={{
            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`
          }}
          BackdropProps={{ invisible: true }}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
