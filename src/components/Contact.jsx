import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";

export default function Contact() {
  return (
    <div id="contact">
      <div className="max-w-[80vw] mx-auto mt-12 mb-6 sm:my-16 md:my-36">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-wider text-zinc-700 dark:text-zinc-200">
          Let's Talk!
        </h1>
        <p className="leading-relaxed sm:leading-loose text-[0.8rem] sm:text-[1rem] md:text-[1.25rem] dark:text-zinc-300">
          Feel free to reach out! I'm always open to discussing new projects,
          creative ideas, or exploring opportunities to join your team. I'm
          eager to hear from you and excited about the possibilities ahead!
        </p>
      </div>
      <div className="text-stone-700 dark:text-stone-300 mx-10 mb-16 flex flex-wrap justify-center items-center text-4xl sm:text-5xl gap-2 sm:gap-5">
        <Link
          to="https://www.linkedin.com/in/kanjana-srisumran"
          target="_blank"
        >
          <BiLogoLinkedinSquare className="hover:text-indigo-500 duration-300" />
        </Link>
        <Link to="https://www.instagram.com/pam.srisum" target="_blank">
          <BiLogoInstagramAlt className="hover:text-indigo-500 duration-300" />
        </Link>
        <Link to="https://github.com/KanjanaSri" target="_blank">
          <BiLogoGithub className="hover:text-indigo-500 duration-300" />
        </Link>
      </div>
    </div>
  );
}
