import React, { useState } from "react";
import downarrow from "../images/downarrow.svg";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState("");

  function copyToClipboard(e) {
    let str = "blumaa@gmail.com";
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");

    setCopySuccess("Copied!");
  }
  return (
    <>
      <div id="contact">
        <div className="grid-container">
          <div className="top-container">
            <div id="title-box">
              <div id="title">Contact</div>
            </div>
          </div>
          <div id="middle-container">
            <div id="description-one">
              <div id="title">Send me an email or connect with me!</div>
              <div id="email-buttons">
                <div id="email-text">
                  <Button
                    color="default"
                    href="mailto:blumaa@gmail.com"
                    target="_blank"
                    startIcon={<EmailIcon style={{ color: "#384a6cff" }} />}
                  />
                  blumaa@gmail.com
                </div>
                {document.queryCommandSupported("copy") && (
                  <>
                    <Button onClick={copyToClipboard}>
                      <FileCopyOutlinedIcon style={{ color: "#ec6543ff" }} />
                    </Button>
                    {copySuccess}
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
                startIcon={<GitHubIcon style={{ color: "#384a6cff" }} />}
                href="https://github.com/blumaa"
                target="_blank"
              />
              <Button
                variant="link"
                color="default"
                startIcon={<LinkedInIcon style={{ color: "#384a6cff" }}/>}
                href="https://www.linkedin.com/in/aaron-blum-0904/"
                target="_blank"
              />
              <Button
                variant="link"
                color="default"
                startIcon={<InstagramIcon style={{ color: "#384a6cff" }}/>}
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

export default Contact;
