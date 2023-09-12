import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const Resume = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={` ${darkMode ? 'dark' : 'light '}`}>
      <h1 className="flex justify-center text-5xl pb-10 font-bold py-10">Resume</h1>
      <div className="flex flex-wrap">
      </div>
      <div className="flex justify-center py-10">
        <div className={`max-w-4xl border p-4 rounded-lg ${darkMode ? 'light' : 'dark ' }`}>
          <div className="text-center">
            <img
              src="images/Resumepng.png"
              alt="resume"
              className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          download="Connor McGrew Resume"
          href="images/resume.pdf"
          className={`${darkMode ? 'light' : 'dark'
            } px-4 rounded-md py-2 mb-12 navhvr`}>
          Download my Resume!
        </a>
      </div>
    </div>
  );
};

export default Resume;
