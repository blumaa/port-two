import React, { useCallback, useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typography from "@material-ui/core/Typography";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import profilepic from "../images/profile2.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";
import ProfileImage from "./ProfileImage";
import rocket from "../images/rocket.svg";
import { useMappedState } from "redux-react-hook";
import LanguageSwitch from "./LanguageSwitch";
import { textColor } from "./styles";

const Home = () => {
  const [lng, setLng] = useState("english");

  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { language, theme } = useMappedState(mapState);

  // console.log(theme);
  useEffect(() => {
    setLng(language.language);
  });

  let titleText;
  let subtTitleText;
  let description;

  if (lng === "spanish") {
    titleText = "Hola, soy Aaron";
  } else if (lng === "deutsch") {
    titleText = "Hallo, ich heiße Aaron";
  } else if (lng === "english") {
    titleText = "Hi, I'm Aaron";
  }

  if (lng === "spanish") {
    subtTitleText = "desarrollador, profesor, escritor";
  } else if (lng === "deutsch") {
    subtTitleText = "Entwickler, Pädagoge, Schriftsteller";
  } else {
    subtTitleText = "developer, educator, writer";
  }

  if (lng === "spanish") {
    description =
      "Llevo creatividad y organización a cada proyecto, así como una motivación infinita para realizar el sueño de cada cliente.";
  } else if (lng === "deutsch") {
    description =
      "Ich bringe Kreativität und Organisation in jedes Projekt ein, ebenso wie den unermüdlichen Drang, den Wunsch jedes Kunden zu verwirklichen.";
  } else {
    description =
      "I bring creativity and organization to every project, as well as a relentless drive to realize each clients' dream.";
  }

  return (
    <>
      <div id="home">
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box"></div>
            <div id="lng-container">
              {/* <LanguageSwitch /> */}
            </div>
          </div>
          <div id="about-me-middle-container">
            <div id="title-box">
              <Typography variant="h4" style={{ color: theme.theme.mainText }}>
                {titleText}
              </Typography>
              <Typography
                variant="h6"
                id="sub-header"
                gutterBottom
                style={{ color: theme.theme.buttonText }}
              >
                {subtTitleText}
              </Typography>
            </div>
            <div id="main-box-one">
              <div id="main-box-image-container">
                <ProfileImage image={profilepic} />

                <div id="main-box-text">
                  <Typography
                    variant="body1"
                    style={{ color: theme.theme.mainText }}
                  >
                    {description}
                  </Typography>
                </div>
              </div>
            </div>
            <div id="main-box-two">
              <Button
                variant="link"
                color="default"
                startIcon={<GitHubIcon />}
                href="https://github.com/blumaa"
                target="_blank"
                style={{ color: theme.theme.mainText }}
              />
              <Button
                variant="link"
                color="default"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/aaron-blum-0904/"
                target="_blank"
                style={{ color: theme.theme.mainText }}
              />
              <Button
                variant="link"
                color="default"
                startIcon={<InstagramIcon />}
                href="https://www.instagram.com/xblumaa/"
                target="_blank"
                style={{ color: theme.theme.mainText }}
              />
            </div>
          </div>
          {/* <div className="long-row-middle-2">long-row-middle</div> */}
          <div className="bottom-container">
            <div id="bottom-one">
              <div className="home-animation">
                <img src={rocket} />
              </div>
            </div>
            <div id="bottom-two">
              {/* <div class="container">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div> */}
              <div id="down-button">
                <Link
                  to="page1"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <img
                    src={downarrow}
                    id="accordion-icon"
                    style={{ fill: theme.theme.mainText }}
                    
                  />
                </Link>
              </div>
            </div>
            <div id="bottom-three">
              {/* <div id="bottom-three" className="animated bounceInLeft slower"> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
