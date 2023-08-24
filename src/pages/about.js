import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const AboutMe = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`pt-10 px-4 ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="text-5xl font-bold mb-6 flex justify-center">About Me</h1>
      <div className="flex flex-col items-center">
        <div className={`max-w-md w-full shadow-md rounded-lg p-6 mb-6 ${darkMode ? 'light' : 'dark'}`}>
          <h2 className="text-2xl font-bold mb-4">Hello, I'm Connor McGrew</h2>
          <p className="mb-4">
            [Write a brief introduction about yourself. This could include your background, interests, and what you're passionate about.]
            I am 19 years old and I enjoy snowboarding, traveling, and am former competitive diver. 
          </p>
          <p className="mb-4">
            [Share your journey and experiences related to your field or interests. Highlight any achievements or projects you're proud of.]
          </p>
          <p className="mb-4">
            [Feel free to mention any relevant skills, hobbies, or personal traits that define you.]
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
