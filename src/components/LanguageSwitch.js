import React, { useCallback } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "redux-react-hook";
import * as actions from "../constants/action_types";
import { useMappedState } from "redux-react-hook";

const LanguageSwitch = () => {
  const dispatch = useDispatch();

  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState,
    };
  }, []);

  const { language, theme } = useMappedState(mapState);
  // console.log(language);

  const handleLngChange = (lng) => {
    // console.log(lng);

    let newLanguage = lng;
    // console.log(newLanguage);
    dispatch({ type: actions.SET_LANGUAGE, language: newLanguage });
  };
  return (
    <>
      <Button
        color="default"
        style={
          language.language === "english"
            ? {
                color: theme.theme.buttonText,
                textTransform: "none",
                borderRight: "1px solid" + theme.theme.buttonText,
                borderRadius: 0,
                display: "inline-block",
                paddingRight: 5,
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                minWidth: 0,
              }
            : {
                color: theme.theme.mainText,
                textTransform: "none",
                display: "inline-block",
                padding: 0,
                minWidth: 0,
              }
        }
        onClick={() => handleLngChange("english")}
      >
        en
      </Button>
      <Button
        color="default"
        style={
          language.language === "deutsch"
            ? {
                color: theme.theme.buttonText,
                textTransform: "none",
                borderRight: "1px solid" + theme.theme.buttonText,
                borderRadius: 0,
                display: "inline-block",
                paddingRight: 5,
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                minWidth: 0,
              }
            : {
                color: theme.theme.mainText,
                textTransform: "none",
                display: "inline-block",
                padding: 0,
                minWidth: 0,
              }
        }
        onClick={() => handleLngChange("deutsch")}
      >
        de
      </Button>
      <Button
        color="default"
        style={
          language.language === "spanish"
            ? {
                color: theme.theme.buttonText,
                textTransform: "none",
                borderRight: "1px solid" + theme.theme.buttonText,
                borderRadius: 0,
                display: "inline-block",
                paddingRight: 5,
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: 0,
                minWidth: 0,
              }
            : {
                color: theme.theme.mainText,
                textTransform: "none",
                display: "inline-block",
                padding: 0,
                minWidth: 0,
              }
        }
        onClick={() => handleLngChange("spanish")}
      >
        es
      </Button>
    </>
  );
};

export default LanguageSwitch;
