import React, { useContext } from "react";
import TechnologiesCard from "../components/langCard";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Resume = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={` ${darkMode ? "bg-neutral-900 text-zinc-200" : "bg-zinc-200 text-black"}`}>
      <h1 className="flex justify-center text-5xl pb-10 font-bold py-10">Resume</h1>

      {/* Front-end technologies */}
      <TechnologiesCard category="Front-End" />

      {/* Back-end technologies */}
      <TechnologiesCard category="Back-End" />

      {/* Database technologies */}
      <TechnologiesCard category="Databases" />

      {/* Miscellaneous technologies */}
      <TechnologiesCard category="Misc" />

      <div className="flex justify-center py-10">
        <div className="max-w-xs">
          <a
            download="Connor McGrew Resume"
            href="images/resume.pdf"
            className={`${
              darkMode ? 'bg-white text-black' : 'bg-neutral-900 text-white'
            } px-4 rounded-md ml-8 py-2 mb-12 hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-colors duration-300 ease-in-out`}
          >
            Download my Resume!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
