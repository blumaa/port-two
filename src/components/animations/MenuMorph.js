import React, { useCallback, useRef, useEffect, useState } from "react";
import { gsap, Power3, Bounce, Back } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useMappedState } from "redux-react-hook";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles({
  
  paper: {
    backgroundColor: "#a39274",
    color: "#dfd8c8",
    // display: "flex",
    boxShadow: "4px 3px 100px 0px #000000",
  },
  root: {
    borderRadius: 10,
    color: "#e3e3e3",
    fontFamily: "'Proza Libre', sans-serif",
  },
});

const MenuMorph = () => {
  // console.log(toggleDrawer)
  const classes = useStyles();

  const [show, setShow] = useState(true);
  const [pause, setPause] = useState(true);
  const animation = useRef(null);

  let topLine = useRef(null);
  let middleLine = useRef(null);
  let bottomLine = useRef(null);

  let closeCircle = useRef(null);
  let closeLine2 = useRef(null);
  let closeLine1 = useRef(null);

  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);

  useEffect(() => {
    animation.current = gsap
      .timeline()
      .addLabel("start")
      .to(
        topLine.current,
        1,
        {
          morphSVG: { shape: closeCircle.current, shapeIndex: 22 },
          ease: Power3.easeOut,
        },
        "start"
      )
      .to(
        middleLine.current,
        1,
        {
          morphSVG: { shape: closeLine2.current, shapeIndex: 1 },
          ease: Power3.easeOut,
        },
        "start"
      )
      .to(
        bottomLine.current,
        1,
        {
          morphSVG: { shape: closeLine1.current, shapeIndex: 1 },
          ease: Power3.easeOut,
        },
        "start"
      );

    return () => {
      animation.current.kill();
    };
  }, []);

  useEffect(() => {
    if (show) {
      animation.current.reverse();
    } else {
      animation.current.play();
    }
    console.log("show", show);
  }, [show]);

  const handleClick = () => {
    // toggleDrawer("left", true)
    setShow(!show);
  };

  const toggleDrawer = () => {};

  const menu = () => (
    <div onClick={handleClick}>
      <List>
        <ListItem>
          <Link
            to="page0"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
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

  return (
    <>
      <svg
        id="menu_morph"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        onClick={() => handleClick()}
      >
        <title>menuMorph</title>
        <g id="menu">
          <g id="Menu-2" data-name="Menu">
            <path
              id="topline"
              d="M382.05,1109.73H743a12,12,0,0,0,0-24.06H382.05a12,12,0,0,0,0,24.06Z"
              transform="translate(-326 -974)"
              fill={theme.theme.mainText}
              ref={topLine}
            />
            <path
              id="middleline"
              d="M743,1206H382.05a12,12,0,0,0,0,24.06H743a12,12,0,1,0,0-24.06Z"
              transform="translate(-326 -974)"
              fill={theme.theme.mainText}
              ref={middleLine}
            />
            <path
              id="bottomline"
              d="M743,1326.27H382.05a12,12,0,0,0,0,24.06H743a12,12,0,0,0,0-24.06Z"
              transform="translate(-326 -974)"
              fill={theme.theme.mainText}
              ref={bottomLine}
            />
          </g>
        </g>
        <g id="close">
          <path
            id="closecirlce"
            d="M562.5,1029.5c-103.94,0-188.5,84.56-188.5,188.5s84.56,188.5,188.5,188.5a187.61,187.61,0,0,0,130.63-52.6,7.67,7.67,0,1,0-10.64-11.06,172.31,172.31,0,0,1-120,48.32c-95.48,0-173.16-77.68-173.16-173.16S467,1044.84,562.5,1044.84,735.66,1122.52,735.66,1218a172.52,172.52,0,0,1-11.6,62.44,7.67,7.67,0,1,0,14.31,5.54A187.72,187.72,0,0,0,751,1218C751,1114.06,666.44,1029.5,562.5,1029.5Z"
            transform="translate(-326 -974)"
            fill={theme.theme.mainText}
            ref={closeCircle}
          />
          <path
            id="closeline2"
            d="M648.78,1131.72a7.67,7.67,0,0,0-10.85,0L476.22,1293.43a7.67,7.67,0,1,0,10.85,10.85l161.71-161.71A7.67,7.67,0,0,0,648.78,1131.72Z"
            transform="translate(-326 -974)"
            fill={theme.theme.mainText}
            ref={closeLine2}
          />
          <path
            id="closeline1"
            d="M476.22,1131.72a7.67,7.67,0,0,0,0,10.85l161.71,161.71a7.67,7.67,0,1,0,10.85-10.85L487.07,1131.72A7.67,7.67,0,0,0,476.22,1131.72Z"
            transform="translate(-326 -974)"
            fill={theme.theme.mainText}
            ref={closeLine1}
          />
        </g>
      </svg>
      <div id="menu-container">
        <>
          <SwipeableDrawer
          anchor="top"
            transitionDuration={200}
            open={!show}
            onClose={handleClick}
            onOpen={handleClick}
            classes={{
              paper: classes.paper, 
            }}
            BackdropProps={{ invisible: false }}
          >
            {menu()}
          </SwipeableDrawer>
        </>
      </div>
    </>
  );
};

export default MenuMorph;
