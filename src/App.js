import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
