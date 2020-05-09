import React, { useState, useCallback } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { useMappedState } from "redux-react-hook";
import Switch from "@material-ui/core/Switch";
import { useDispatch } from "redux-react-hook";
import * as actions from "../constants/action_types";

const Footer = () => {
  const dispatch = useDispatch();
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
      "&$checked": {
        color: theme.theme.mainText,
      },
      "&$checked + $track": {
        backgroundColor: theme.theme.buttonText,
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className="footer-container">
      <div className="item1"></div>
      <div className="item2"></div>
      <div className="item3">
        <FormControlLabel
          control={
            <CustomSwitch
              size="small"
              checked={state.checked}
              onChange={handleThemeChange}
              name="checked"
            />
          }
          label={
            theme.theme.backgroundColor === "#e3e3e3"
              ? "day mode"
              : "night mode"
          }
          labelPlacement="bottom"
          style={{ color: theme.theme.mainText, textTransform: "none" }}
        />
      </div>
    </div>
  );
};

export default Footer;
