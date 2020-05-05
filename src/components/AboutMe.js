import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d3006cff",
    borderRadius: 10,
    border: "0px solid black",
    color: "white",
    boxShadow: "2px 2px 3px 2px rgba(85, 85, 85, 0.747)",
    fontFamily: "'Proza Libre', sans-serif",
  },
});

const AboutMe = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { language, theme } = useMappedState(mapState);

  let title;
  let description;
  let description2;

  if (language.language === "spanish") {
    title = "Sobre Yo";
  } else if (language.language === "deutsch") {
    title = "Über mich";
  } else {
    title = "About Me";
  }

  if (language.language === "spanish") {
    description =
      "Soy un desarrollador de software de Chicago, Illinois, EE.UU., actualmente vivo en Berlín, Alemania. Tengo mucha experiencia en la creación de aplicaciones organizadas y dinámicas de una sola página usando React-Redux, Javascript y SASS para un estilo extra. Utilizo MongoDB, Node.js, PostgresQL y Ruby on Rails para crear arquitecturas orientadas a servicios RESTful (SOA) en el backend. Recientemente he trabajado con GraphQL y Apollo para obtener una API única y me encanta aprender nuevas tecnologías.";
  } else if (language.language === "deutsch") {
    description =
      "Ich bin ein Softwareentwickler aus Chicago, Illinois, USA, und lebe derzeit in Berlin, Deutschland. Ich bin am erfahrensten in der Erstellung organisierter, dynamischer, einseitiger Anwendungen unter Verwendung von React-Redux, Javascript und SASS für zusätzliches Styling. Ich verwende MongoDB, Node.js, PostgresQL und Ruby on Rails, um RESTful serviceorientierte Architekturen (SOA) auf dem Backend zu erstellen. In letzter Zeit habe ich mit GraphQL und Apollo für einzigartiges API-Holen gearbeitet, und ich liebe es, neue Technologien zu erlernen.";
  } else {
    description =
      "I'm a software developer from Chicago, Illinois, USA, currently living in Berlin, Germany. I am most experienced in creating organized, dynamic, single page applications using React-Redux, Javascript, and SASS for extra styling. I use MongoDB, Node.js, PostgresQL, and Ruby on Rails to create RESTful service oriented architectures (SOA) on the backend. Recently I've worked with GraphQL and Apollo for unique API fetching and I love learning new technologies.";
  }

  if (language.language === "spanish") {
    description2 = "Tengo una formación en educación y música que me empuja a pensar fuera de la caja de códigos. Me encanta aprender idiomas (hablo español y estoy aprendiendo alemán). Esto me ayuda a aumentar mi conocimiento de Javascript, Ruby, y muchos otros marcos de trabajo web.Mi experiencia como profesora de inglés como segunda lengua durante más de diez años me transformó en una excelente director, comunicador, y me hizo sentir muy cómodo trabajando de cerca con la gente."
  } else if (language.language === "deutsch") {
    description2 = "Ich habe einen pädagogischen und musikalischen Hintergrund, der mich dazu bringt, über den Tellerrand zu schauen. Ich liebe es, Sprachen zu lernen (ich spreche Spanisch und ich lerne Deutsch). Das hilft mir, meine Kenntnisse in Javascript, Ruby und vielen anderen Web-Frameworks zu erweitern. Meine mehr als zehnjährige Erfahrung als Lehrer für Englisch als Zweitsprache hat mich zu einem ausgezeichneten Manager und Kommunikator gemacht und mir die enge Zusammenarbeit mit Menschen sehr angenehm gemacht."
  } else {
    description2 =
      "I have a background in education and music that pushes me to think outside the coding box. I love learning languages (I speak Spanish and I'm learning Deutsch). This helps drive me to increase my knowledge of Javascript, Ruby, and many other web frameworks. My experience as a teacher of English as a Second Language for over ten years transformed me into an excellent manager, communicator, and made me really comfortable working closely with people.";
  }
  const classes = useStyles();

  return (
    <>
      <div
        id="about-me"
        style={{ backgroundColor: theme.theme.backgroundColor }}
      >
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              <div id="title" style={{ color: theme.theme.mainText }}>
                {title}
              </div>
            </div>
          </div>
          <div id="middle-container">
            <div id="description-one" style={{ color: theme.theme.mainText }}>
              {description}
            </div>
            <div id="links">
              {/* <Chip
                icon={<CloudDownloadIcon />}
                href="https://drive.google.com/file/d/1V2xJxaN_0R-Slf_geAREuNoO8YLOIkQt/view?usp=sharing"
                target="_blank"
                clickable
                label="Get Formal CV"
              /> */}

              <Button
                href="https://drive.google.com/file/d/1V2xJxaN_0R-Slf_geAREuNoO8YLOIkQt/view?usp=sharing"
                target="_blank"
                startIcon={
                  <CloudDownloadIcon
                    style={{ color: theme.theme.buttonText }}
                  />
                }
                size="small"
                style={{ color: theme.theme.mainText, textTransform: "none" }}
              >
                Formal CV
              </Button>
              <Button
                startIcon={
                  <GitHubIcon style={{ color: theme.theme.buttonText }} />
                }
                href="https://github.com/blumaa"
                target="_blank"
                size="small"
                style={{ color: theme.theme.mainText, textTransform: "none" }}
              >
                My GitHub
              </Button>
            </div>
            <div
              id="description-two"
              style={{ color: theme.theme.mainText }}
            >{description2}</div>
          </div>
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two">
              <div id="down-button">
                <Link
                  to="page4"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <img src={downarrow} id="accordion-icon" />
                </Link>
              </div>{" "}
            </div>
            <div id="bottom-three"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
