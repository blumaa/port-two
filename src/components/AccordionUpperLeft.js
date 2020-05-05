import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link, animateScroll as scroll } from "react-scroll";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import { useDispatch } from "redux-react-hook";
import * as actions from "../constants/action_types";
import { useMappedState } from "redux-react-hook";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  top: {
    display: "flex",
  },
  paper: {
    backgroundColor: "#384a6cff",
    width: "50vw",
    color: "white",
    display: "flex",
    boxShadow: "4px 3px 100px 0px #000000",
  },
  list: {
    width: "100vw",
  },
  root: {
    borderRadius: 10,
    color: "#e3e3e3",
    fontFamily: "'Proza Libre', sans-serif",
  },
});

export default function SwipeableTemporaryDrawer({ flipSwitch }) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    checked: false,
    right: false,
  });

  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);

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
            duration={500}
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
            duration={500}
            onClick={toggleDrawer("left", false)}
          >
            <Button
              classes={{
                root: classes.root,
              }}
            >
              Tech Stack
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="page2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleDrawer("left", false)}
          >
            <Button
              classes={{
                root: classes.root,
              }}
            >
              Portfolio
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="page3"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
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
            to="page4"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={toggleDrawer("left", false)}
          >
            <Button
              classes={{
                root: classes.root,
              }}
            >
              Contact
            </Button>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  const handleThemeChange = () => {
    // console.log("theme change");
    // console.log(theme.theme.backgroundColor);
    theme.theme.backgroundColor === "#e3e3e3"
      ? dispatch({ type: actions.SET_DARK_MODE })
      : dispatch({ type: actions.SET_LIGHT_MODE });

    setState((prevState) => {
      return {
        ...prevState,
        checked: !prevState.checked,
      };
    });
  };

  const CustomSwitch = withStyles({
    switchBase: {
      color: theme.theme.mainText,
      '&$checked': {
        color: theme.theme.mainText,
      },
      '&$checked + $track': {
        backgroundColor: theme.theme.buttonText,
      },
    },
    checked: {},
    track: {},
  })(Switch);
  
  return (
    <div id="up-left-button-container">
      <>
        <button
          onClick={toggleDrawer("left", true)}
          className="accordion-button-container"
        >
          {state.left ? (
            <Burger isOpen={true} />
          ) : (
            <div id="burger-button" >
              <div style={{backgroundColor: theme.theme.mainText}}></div>
              <div style={{backgroundColor: theme.theme.mainText}}></div>
              <div style={{backgroundColor: theme.theme.mainText}}></div>
            </div>
          )}
        </button>
        <FormControlLabel
          control={
            <CustomSwitch 
            size="small" 
              checked={state.checked}
              onChange={handleThemeChange}
              name="checked"
            />
          }
          style={{color: theme.theme.mainText}}

        />

        <SwipeableDrawer
          transitionDuration={200}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          classes={{
            paper: classes.paper, // class name, e.g. `classes-nesting-root-x`
          }}
          BackdropProps={{ invisible: false }}
        >
          {list()}
        </SwipeableDrawer>
      </>
    </div>
  );
}
