import React from "react";

const TechnologiesCard = ({ category }) => {

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
    <div className="flex justify-center">
      <div style={{width: "400px"}}>
        <div className="shadow-md rounded-lg p-6 bg-gray-800 text-white py-2 mb-4">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <ul className="list-disc pl-6">
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
