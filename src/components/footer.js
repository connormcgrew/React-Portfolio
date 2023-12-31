import React, { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className={`py-5 sticky top-[100vh] ${darkMode ? 'dark' : 'light'}`}>
      <div className={`text-5xl flex justify-center gap-5 py-3 ${darkMode ? 'dark' : 'light'}`}>
        <a
          href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/"
          target="_blank"
          rel="noreferrer" 
          className={`hover:text-blue-700 focus:text-blue-700 transition-colors duration-300 ease-in-out ${darkMode ? 'dark' : 'light'}`}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/connormcgrew"
          target="_blank"
          rel="noreferrer" 
          className={`hover:text-gray-800 focus:text-gray-800 transition-colors duration-300 ease-in-out ${darkMode ? 'dark' : 'light'}`}
        >
          <AiFillGithub />
        </a>
      </div>
      <div className={`flex justify-center ${darkMode ? 'dark' : 'light'}`}>
        <p>
          Checkout my{' '}
          <a
            href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/"
            target="_blank"
            rel="noreferrer" 
            className={`${darkMode ? 'text-blue-700' : 'text-blue-700'} hover:text-blue-400 focus:text-blue-400 transition-colors duration-300 ease-in-out'}`}
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/connormcgrew"
            target="_blank"
            rel="noreferrer" 
            className={`${darkMode ? 'text-gray-800' : 'text-gray-800'} hover:text-gray-400 focus:text-gray-400 transition-colors duration-300 ease-in-out'}`}
          >
            Github
          </a>{' '}
          !
        </p>
      </div>
    </footer>
  );
};

export default Footer;
