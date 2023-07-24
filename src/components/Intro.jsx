import React from "react";
import { profileImage } from "../images";

export default function () {
  return (
    <div className="flex flex-col-reverse justify-center items-center md:gap-14 mx-6 sm:mx-10 md:flex-row my-5 sm:my-8 md:my-16">
      <div className="text-zinc-700 dark:text-zinc-300 md:text-end max-w-lg md:basis-1/2 mx-auto md:mx-0">
        <p className="text-base sm:text-lg md:text-lg italic">
          Hello, it's me
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-sky-500 font-semibold block text-2xl sm:text-4xl md:text-5xl">
            KARNJANA
          </span>
        </p>
        <p className="mt-5 md:mt-10 text-sm sm:text-base md:text-lg">
          I am a Vancouver-based Front-end Web Developer. I have a diverse set
          of skills, ranging from design to building applications from scratch.
          My passion is about creating charming interfaces and thoughtfully
          implemented user experiences, as well as building interesting apps. I
          am very excited to make the leap and continue refining my skills!
        </p>
      </div>
      <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 p-5 bg-gray-300 dark:bg-transparent rounded-full shadow-2xl flex justify-center items-center object-cover">
        <img
          className="mt-6 md:mt-0 sm:w-72 md:w-96"
          src={profileImage}
          alt="Karnjana image"
        />
      </div>
    </div>
  );
}
