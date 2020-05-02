import React from "react";
import inkscapelogo from "../../images/inkscape-logo.svg";
import jestlogo from "../../images/jest.svg";
import websocketlogo from "../../images/websocket.svg";
import sqllogo from "../../images/sql.svg";
import stripelogo from "../../images/stripe.svg";
const Other = () => {
  return (
    <div id="individual-stack-container">
      <div id="stack-title"> other</div>
      <div id="stack-icon-container">
        <div id="icon-container">
          <img src={inkscapelogo} id="icon" />
          <div id="icon-title">Inkscape</div>
        </div>
        <div id="icon-container">
          <img src={jestlogo} id="icon" />
          <div id="icon-title">Jest</div>
        </div>
        <div id="icon-container">
          <img src={sqllogo} id="icon" />
          <div id="icon-title">SQL</div>
        </div>
        <div id="icon-container">
          <img src={stripelogo} id="icon" />
          <div id="icon-title">Stripe Payments</div>
        </div>
        <div id="icon-container">
          <img src={websocketlogo} id="icon" />
          <div id="icon-title">Web Sockets</div>
        </div>
      </div>
    </div>
  );
};

export default Other;
