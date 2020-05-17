import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import inkscapelogo from "../../images/inkscape-logo.svg";
import jestlogo from "../../images/jest.svg";
import websocketlogo from "../../images/websocket.svg";
import sqllogo from "../../images/sql.svg";
import stripelogo from "../../images/stripe.svg";
import WebSocketLogo from "../../components/animations/WebSocketLogo";
const Other = () => {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);
  return (
    <div id="individual-stack-container">
      <div id="stack-title" style={{ color: theme.theme.buttonText }}>
        other
      </div>
      <div id="stack-icon-container">
        <div id="icon-container">
          <img src={inkscapelogo} id="icon" />
          <div id="icon-title" style={{ color: theme.theme.mainText }}>
            Inkscape
          </div>
        </div>
        <div id="icon-container">
          <img src={jestlogo} id="icon" />
          <div id="icon-title" style={{ color: theme.theme.mainText }}>
            Jest
          </div>
        </div>
        <div id="icon-container">
          <img src={sqllogo} id="icon" />
          <div id="icon-title" style={{ color: theme.theme.mainText }}>
            SQL
          </div>
        </div>
        <div id="icon-container">
          <img src={stripelogo} id="icon" />
          <div id="icon-title" style={{ color: theme.theme.mainText }}>
            Stripe Payments
          </div>
        </div>
        <div id="icon-container">
          <WebSocketLogo />
          <div id="icon-title" style={{ color: theme.theme.mainText }}>
            Web Sockets
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
