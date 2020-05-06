import React, { useState, useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import uparrow from "../images/uparrow.svg";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { language, theme } = useMappedState(mapState);

  let title;

  if (language.language === "spanish") {
    title = "Contacto"
  } else if (language.language === "deutsch") {
    title = "Kontakt"
  } else {
    title = "Contact"
  }

  let description;

  if (language.language === "spanish") {
    description = "Si estás interesado en contratarme, tienes proyectos o ideas que te gustaría discutir, o simplemente quieres saludar, envíame un correo electrónico o conéctate conmigo de otra manera!";
  } else if (language.language === "deutsch") {
    description = "Wenn Sie daran interessiert sind, mich einzustellen, oder wenn Sie Projekte oder Ideen haben, die Sie gerne besprechen möchten, oder wenn Sie einfach nur hallo sagen wollen, schicken Sie mir eine E-Mail oder verbinden Sie sich auf eine andere Art und Weise mit mir!";
  } else {
    description = "If you are interested in hiring me, have projects or ideas you'd like to discuss, or you just want to say hi, send me an email or connect with me a different way!"
  }

  const [copySuccess, setCopySuccess] = useState("");

  function copyToClipboard(e) {
    let str = "blumaa@gmail.com";
    var el = document.createElement("input");
    el.value = str;
    // el.setAttribute("readonly", "");
    el.style = { position: "float", display: "none" };
    // document.body.appendChild(el);
    // console.log(el.value)
    el.select();
    document.execCommand("copy");
    setCopySuccess("Copied!");
  }
  return (
    <>
      <div
        id="contact"
        style={{ backgroundColor: theme.theme.backgroundColor }}
      >
        <div className="grid-container" data-aos="fade-in">
          <div className="top-container">
            <div id="title-box">
              <div id="title" style={{ color: theme.theme.mainText }}>
                {title}
              </div>
            </div>
          </div>
          <div id="middle-container">
            <div id="description-one" style={{ color: theme.theme.mainText }}>
              <div id="title">
                {description}
              </div>
              <div id="email-buttons">
                <div id="email-text" style={{ color: theme.theme.mainText }}>
                  <Button
                    color="default"
                    href="mailto:blumaa@gmail.com"
                    target="_blank"
                    startIcon={
                      <EmailIcon style={{ color: theme.theme.mainText }} />
                    }
                  />
                  blumaa@gmail.com
                </div>
                {document.queryCommandSupported("copy") && (
                  <>
                    <Button onClick={()=>copyToClipboard()}>
                      <FileCopyOutlinedIcon
                        style={{ color: theme.theme.buttonText }}
                      />
                    </Button>
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {copySuccess}
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* <div id="description-two">
              Connect with me:
            </div> */}
            <div id="links">
              <Button
                variant="link"
                color="default"
                startIcon={
                  <GitHubIcon style={{ color: theme.theme.mainText }} />
                }
                href="https://github.com/blumaa"
                target="_blank"
              />
              <Button
                variant="link"
                color="default"
                startIcon={
                  <LinkedInIcon style={{ color: theme.theme.mainText }} />
                }
                href="https://www.linkedin.com/in/aaron-blum-0904/"
                target="_blank"
              />
              <Button
                variant="link"
                color="default"
                startIcon={
                  <InstagramIcon style={{ color: theme.theme.mainText }} />
                }
                href="https://www.instagram.com/xblumaa/"
                target="_blank"
              />
            </div>
            <div></div>
          </div>
          <div className="bottom-container">
            <div id="bottom-one"></div>
            <div id="bottom-two">
              <div id="down-button">
                <Link
                  to="main-container"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <img src={uparrow} id="accordion-icon" />
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

export default Contact;
