import React, { useContext, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={`py-10 flex flex-col md:flex-row items-center justify-between ${darkMode ? 'dark' : 'light'}`}>
      <div className="md:flex items-center flex-grow justify-center hidden">
        <ul className="flex items-center">
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              <span className={`px-4 py-2 cursor-pointer navhvr`}>About Me</span>
            </ScrollLink>
          </li>
          <li className="ml-4">
            <ScrollLink to="projects" smooth={true} duration={500}>
              <span className={`px-4 py-2 cursor-pointer navhvr`}>Projects</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              <div className='navhvr cursor-pointer ml-4 font-bold'>
                <h1 className={`text-4xl px-4`}>Connor McGrew</h1>
                <p className={`text-md flex justify-center`}>Fullstack Developer</p>
              </div>
            </ScrollLink>
          </li>
          <li className="ml-4">
            <ScrollLink to="resume" smooth={true} duration={500}>
              <span className={`px-4 py-2 cursor-pointer navhvr`}>Resume</span>
            </ScrollLink>
          </li>
          <li className="ml-4">
            <ScrollLink to="contact" smooth={true} duration={500}>
              <span className={`px-4 py-2 cursor-pointer navhvr`}>Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="md:flex items-center justify-end">
        <div className='absolute top-13 right-8'>
        <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl' />
        </div>
      </div>

      <div className="md:hidden"> {/* Mobile section */}
        <ScrollLink to="about" smooth={true} duration={500}>
          <div className='navhvr cursor-pointer ml-4 font-bold'>
            <h1 className={`text-4xl px-4`}>Connor McGrew</h1>
            <p className={`text-md flex justify-center`}>Fullstack Developer</p>
          </div>
        </ScrollLink>
        <div className='absolute top-9 left-8'>
          <button onClick={() => setShowNav(!showNav)}>
            <svg
              className={`w-6 h-6 ${darkMode ? 'dark' : 'light'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {showNav && (
          <ul className="flex flex-row mt-4">
            <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>About Me</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>Projects</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="resume" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>Resume</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>Contact</span>
              </ScrollLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
