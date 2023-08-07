import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const TechnologiesCard = ({ category }) => {
  const { darkMode } = useContext(DarkModeContext);

  const frontEndTechnologies = ["HTML", "CSS", "JavaScript", "React.js", "Handlebars.js", "Tailwindcss", "Bootstap CSS", "PWA"];
  const backEndTechnologies = ["Node.js", "Express.js", "RESTful APIs", "MVC", "JSON Web Tokens", "ORM"];
  const databaseTechnologies = ["MySQL", "Sequelize", "MongoDB", "Mongoose", "GraphQL"];
  const miscTechnologies = ["Git", "Github", "GitLab", "Heroku", "MERN Stack", "Object-Oriented Programming", "State Management", "Test-Driven Development", "Jest", "Progressive Web Applications"];

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
    <div className={`flex justify-center ${darkMode ? "dark" : "light"}`}>
      <div className=" w-[400px]">
        <div className={`shadow-md rounded-lg p-6 lg:h-[250px] ${darkMode ? "light" : "dark"} py-2 mb-4`}>
          <h2 className={`text-xl font-semibold mb-2 ${darkMode ? "light" : "dark"}`}>{category}</h2>
          <ul className={`list-disc pl-6 ${darkMode ? "light" : "dark"}`}>
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
