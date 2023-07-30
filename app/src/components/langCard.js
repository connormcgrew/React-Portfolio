import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const TechnologiesCard = ({ category }) => {
  const { darkMode } = useContext(DarkModeContext);

  const frontEndTechnologies = ["HTML", "CSS", "JavaScript", "React.js", "Handlebars.js", "Tailwindcss", "Bootstap CSS"];
  const backEndTechnologies = ["Node.js", "Express.js", "RESTful APIs"];
  const databaseTechnologies = ["MySQL", "MongoDB", "GraphQL"];
  const miscTechnologies = ["Git", "Github", "Heroku" ];

  let technologies;
  switch (category) {
    case "Front-End":
      technologies = frontEndTechnologies;
      break;
    case "Back-End":
      technologies = backEndTechnologies;
      break;
    case "Databases":
      technologies = databaseTechnologies;
      break;
    case "Misc":
      technologies = miscTechnologies;
      break;
    default:
      technologies = [];
  }

  return (
    <div className={`flex justify-center ${darkMode ? "bg-neutral-900 " : "bg-zinc-200 "}`}>
      <div style={{ width: "400px" }}>
        <div className={`shadow-md rounded-lg p-6 ${darkMode ? "bg-zinc-200 " : "bg-neutral-900 "} py-2 mb-4`}>
          <h2 className={`text-xl font-semibold mb-2 ${darkMode ? "text-black" : "text-white"}`}>{category}</h2>
          <ul className={`list-disc pl-6 ${darkMode ? "text-black" : "text-white"}`}>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
