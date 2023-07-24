import "./App.css";
import React, { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gradient-to-tl from-gray-900 to-indigo-900">
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
