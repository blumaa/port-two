// src/reducers/reports.js
const INITIAL_STATE = {
  theme: {
    backgroundColor: "#252523",
    mainText: "#dfd8c8",
    buttonText: "#a39274",
  },
};

function themeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LIGHT_MODE": {
      const lightMode = {
        backgroundColor: "#e3e3e3",
        mainText: "#3a4a6fff",
        buttonText: "#ec6543ff",
      };
      //   console.log("reducer", action);
      return {
        ...state,
        theme: {
          backgroundColor: "#e3e3e3",
          mainText: "#3a4a6fff",
          buttonText: "#ec6543ff",
        },
      };
    }
    case "SET_DARK_MODE": {
      const darkMode = {
        backgroundColor: "#262626",
        mainText: "#f5f5f5",
        buttonText: "#dcdcdc",
      };
      //   console.log("reducer", action);
      return {
        ...state,
        theme: {
          backgroundColor: "#252523",
          mainText: "#dfd8c8",
          buttonText: "#a39274",
        },
      };
    }

    default:
      return state;
  }
}
export default themeReducer;
