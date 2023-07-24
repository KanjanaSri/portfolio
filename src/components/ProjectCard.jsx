import React from "react";
import { Link } from "react-router-dom";
import { RiGithubFill } from "react-icons/ri";
import { BiLogoNetlify } from "react-icons/bi";

export default function ProjectCard({
  image,
  name,
  icons,
  descriotion,
  netlifyUrl,
  githubUrl,
}) {
  return (
    <div className="flex justify-center">
      <div className="bg-indigo-100 flex flex-col md:flex-row sm:max-w-[80vh] md:max-w-[70vw] md:h-[70vh] drop-shadow-xl rounded-3xl">
        <div className="w-[80%] h-96 md:h-full mx-auto py-3 md:py-0 md:w-[60%]">
          <img
            src={image}
            className="w-full h-full object-cover md:rounded-l-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center md:w-[40%] px-3">
          <p className="text-2xl font-semibold italic">{name}</p>
          <div>{icons}</div>
          <p className="text-sm">
            {descriotion}
            <span className="font-semibold italic">
              {" "}
              live version and source code below:
            </span>
          </p>
          <div className="text-5xl flex justify-center items-center gap-5 cursor-pointer pb-2">
            <Link to={netlifyUrl} target="_blank">
              <BiLogoNetlify className="text-teal-500 hover:scale-125 duration-300" />
            </Link>
            <Link to={githubUrl} target="_blank">
              <RiGithubFill className="text-purple-500 hover:scale-125 duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}