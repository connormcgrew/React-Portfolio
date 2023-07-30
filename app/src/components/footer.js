import React, { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className={`py-5 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black'}`}>
      <div className="text-5xl flex justify-center gap-5 py-3">
        <a href="https://github.com/connormcgrew"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/"><AiFillLinkedin /></a>
      </div>
      <div className="flex justify-center">
        <p>Checkout my
          <a href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/" className={`${darkMode ? 'text-white' : 'text-gray-800'}`}> LinkedIn </a>
          and
          <a href="https://github.com/connormcgrew" className={`${darkMode ? 'text-white' : 'text-gray-800'}`}> Github</a>
          !
        </p>
      </div>
    </footer>
  );
}

export default Footer;
