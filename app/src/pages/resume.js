import React, { useContext } from "react";
import TechnologiesCard from "../components/langCard";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Resume = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={` ${darkMode ? 'dark' : 'light '}`}>
      <h1 className="flex justify-center text-5xl pb-10 font-bold py-10">Resume</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/4 m-auto lg:mr-2">
          {/* Front-end technologies */}
          <TechnologiesCard category="Front-End" />

          {/* Back-end technologies */}
          <TechnologiesCard category="Back-End" />
        </div>
        <div className="w-full lg:w-1/4 m-auto lg:ml-2">
          {/* Database technologies */}
          <TechnologiesCard category="Databases" />

          {/* Miscellaneous technologies */}
          <TechnologiesCard category="Misc" />
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="max-w-xs">
          <a
            download="Connor McGrew Resume"
            href="images/resume.pdf"
            className={`${darkMode ? 'light' : 'dark'
              } px-4 rounded-md py-2 mb-12 navhvr`}>
            Download my Resume!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
