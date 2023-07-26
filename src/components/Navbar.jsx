import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { HashLink as Link } from "react-router-hash-link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="sticky top-0 z-50 text-stone-100 dark:text-stone-800 bg-gradient-to-br dark:bg-gradient-to-br from-cyan-500 dark:from-slate-400 to-sky-600 px-5 dark:to-sky-400 md:px-16 py-3 flex justify-end sm:justify-between items-center drop-shadow-xl">
      <div className="font-Charmonman text-xl sm:text-2xl md:text-4xl hidden sm:block">
        KS
      </div>
      <div className="flex gap-5">
        <button
          className="text-stone-700 dark:text-stone-200 bg-blue-200 dark:bg-indigo-400 bg rounded-full p-2 outline-none"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </button>
        <div className="font-semibold flex items-center text-xs sm:text-sm md:text-base gap-5">
          <Link to="#projects">PROJECTS</Link>
          <Link to="#contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}
