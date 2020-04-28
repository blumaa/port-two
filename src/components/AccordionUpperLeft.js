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

const useStyles = makeStyles({
    
  paper: {
    backgroundColor: "#8076a300",
    marginTop: "10vh",
    width: "30vw",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    color: "white",
    height: "60vw",
    display: "flex",
   

    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "29vw",
  },
});

export default function SwipeableTemporaryDrawer() {
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

  const list = (anchor) => (
    <div
      className={clsx(classes.list, "left")}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText>About Me</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Tech Stack</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Portfolio</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Contact</ListItemText>
        </ListItem>
      </List>
      {/* <Divider /> */}
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
            <img src={Drawer1} id="accordion-icon" />
          )}
        </button>
        {/* <Button onClick={toggleDrawer("left", true)}>Left</Button> */}
        <SwipeableDrawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          classes={{
              root: classes.root,
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
