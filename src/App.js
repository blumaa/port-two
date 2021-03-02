import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { useMappedState } from "redux-react-hook";
import ReactGA from 'react-ga';
import Separator1 from './components/animations/Separator1'
ReactGA.initialize('UA-165021071-1');

function App() {
  const mapState = useCallback((state) => {
    return {
      language: state.languageState,
      theme: state.themeState
    };
  }, []);

  const { theme } = useMappedState(mapState);

  // console.log(theme)
    return (<Separator1 />
      
  );
}

export default App;
