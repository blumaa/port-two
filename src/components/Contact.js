import React from "react";

const Contact = () => {
  return (
    <>
      <div id="tech-stack">
        <div className="grid-container">
          <div className="long-row-top">
            <div id="title-box">
              <div id="title">Contact</div>
              {/* <div id="sub-title">front end developer</div> */}
            </div>
          </div>
          <div className="long-row-middle-1">
            Interested in collaborating on new projects, hiring me or just want
            to grab a coffee?
          </div>
          <div className="long-row-middle-2">
            I am a software developer from Australia based in Berlin, Germany.
            I'm passionate about developing modular scalable software that can
            be optimised to solve complex issues. I'm most experienced in using
            PostgresSQL, Ruby on Rails and Node.js to create RESTful APIs and
            service-oriented architectures (SOA) on the backend with React-Redux
            and JavaScript for dynamic frontend views. Recently I've worked with
            Jest-Enzyme for testing and I love learning new technologies.
          </div>
          <div className="long-row-bottom-title">long-row-bottom</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
