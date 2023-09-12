import React, { useContext, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={`py-10 flex justify-center items-center ${darkMode ? 'dark' : 'light'}`}>
      <div className="hidden md:flex">
        <ul className="flex justify-center items-center">
        <li className="">
            <ScrollLink to="about" smooth={true} duration={500}>
              <span className={`px-4 py-2 cursor-pointer navhvr`}>About Me</span>
            </ScrollLink>
          </li>
          <li className="ml-4">
            <ScrollLink to="projects" smooth={true} duration={500}>
              <span className={`px-4 py-2 cursor-pointer navhvr`}>Projects</span>
            </ScrollLink>
          </li>
          <ScrollLink to="about" smooth={true} duration={500}>
              <div className='navhvr cursor-pointer ml-4'>
            <h1 className={`text-3xl px-4`}>Connor McGrew</h1>
            <p className={`text-sm flex justify-center`}>Fullstack Developer</p>
            </div>
          </ScrollLink>
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
      <div className="md:hidden">
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
        {showNav && (
          <ul className="flex flex-col mt-4">
            <li className='my-2'>
              <ScrollLink to="home" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>Home</span>
              </ScrollLink>
            </li>
            <li className='my-2'>
              <ScrollLink to="projects" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>Projects</span>
              </ScrollLink>
            </li>
            <li className='my-2'>
              <ScrollLink to="resume" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>Resume</span>
              </ScrollLink>
            </li>
            <li className='my-2'>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <span className={`px-4 py-2 ${darkMode ? 'dark' : 'light'} navhvr`}>Contact</span>
              </ScrollLink>
            </li>
          </ul>
        )}
         <div className="flex">
            <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl ml-4 ' />
          </div>
      </div>
    </nav>
  );
}

export default Header;
