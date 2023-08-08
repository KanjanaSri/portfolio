import React from "react";

import { PiFileHtmlLight, PiFileCssLight } from "react-icons/pi";
import { SiTailwindcss, SiRedux, SiReactrouter } from "react-icons/si";
import { RiJavascriptLine, RiGithubFill } from "react-icons/ri";
import { FaReact, FaFigma } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="text-stone-700 dark:text-sky-600 mx-10 my-24 flex flex-wrap justify-center items-center text-2xl sm:text-4xl md:text-5xl gap-6 sm:gap-6 md:gap-6">
      <code className="text-base sm:text-lg md:text-2xl font-semibold italic">
        Skills = () =&gt;
      </code>
      <div className="relative group">
        <PiFileHtmlLight size={45} className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-20px] flex justify-center text-xs">
          HTML
        </div>
      </div>
      <div className="relative group">
        <PiFileCssLight size={45} className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-20px] flex justify-center text-xs">
          CSS
        </div>
      </div>
      <div className="relative group">
        <RiJavascriptLine className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-20px] flex justify-center text-xs">
          Javascript
        </div>
      </div>
      <div className="relative group">
        <SiTailwindcss className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-20px] flex justify-center text-xs">
          Tailwind
        </div>
      </div>
      <div className="relative group">
        <FaFigma size={38} className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-20px] flex justify-center text-xs">
          Figma
        </div>
      </div>
      <div className="relative group">
        <RiGithubFill size={45} className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-20px] flex justify-center text-xs">
          Github
        </div>
      </div>
      <div className="relative group">
        <FaReact size={40} className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-20px] flex justify-center text-xs">
          React
        </div>
      </div>
      <div className="relative group">
        <SiReactrouter className="hover:scale-125 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-22px] flex justify-center text-xs">
          Reactrouter
        </div>
      </div>
      <div className="relative group">
        <SiRedux size={35} className="hover:scale-110 duration-300" />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-[-25px] flex justify-center text-xs">
          Redux
        </div>
      </div>
    </div>
  );
}
