import React from "react";
import TechnologiesCard from "../components/langCard"; 


const Resume = () => {
  return (
    <div>
    <h1 className="flex justify-center text-5xl pb-10 font-bold">Resume</h1>

      {/* Front-end technologies */}
      <TechnologiesCard category="Front-End"/>
       
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
        className="bg-gray-800 text-white px-4 rounded-md ml-8  py-2 mb-12"
      >
        Download my Resume!
      </a>
    </div>
    </div>
    </div>
    
  );
};

export default Resume;
