import React, { useContext, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={`py-10 flex justify-between items-center ${darkMode ? 'bg-gradient-to-r from-neutral-900 to-zinc-200 text-white' : 'bg-gradient-to-r from-zinc-200 to-neutral-900'}`}>
      <div className="flex items-center">
        <ScrollLink to="home" smooth={true} duration={500}>
          {/* Use ScrollLink instead of NavLink */}
          <h1 className={`text-xl ${darkMode ? 'dark' : 'light'} navhvr px-4 py-2 rounded-md ml-8`}>Connor McGrew</h1>
        </ScrollLink>
        <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl ml-4 ' />
      </div>
      <div className="hidden md:flex items-center">
        <ul className='flex mr-4'>
          <li className="ml-4">
            <ScrollLink to="home" smooth={true} duration={500}>
              {/* Use ScrollLink instead of NavLink */}
              <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Home</span>
            </ScrollLink>
          </li>
          <li className="ml-4">
            <ScrollLink to="projects" smooth={true} duration={500}>
              {/* Use ScrollLink instead of NavLink */}
              <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Projects</span>
            </ScrollLink>
          </li>
          <li className="ml-4">
            <ScrollLink to="resume" smooth={true} duration={500}>
              {/* Use ScrollLink instead of NavLink */}
              <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Resume</span>
            </ScrollLink>
          </li>
          <li className="ml-4">
            <ScrollLink to="contact" smooth={true} duration={500}>
              {/* Use ScrollLink instead of NavLink */}
              <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={() => setShowNav(!showNav)}>
          <svg
            className={`w-6 h-6 ${darkMode ? 'text-neutral-900' : 'text-zinc-200'}`}
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
                {/* Use ScrollLink instead of NavLink */}
                <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Home</span>
              </ScrollLink>
            </li>
            <li className='my-2'>
              <ScrollLink to="projects" smooth={true} duration={500}>
                {/* Use ScrollLink instead of NavLink */}
                <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Projects</span>
              </ScrollLink>
            </li>
            <li className='my-2'>
              <ScrollLink to="resume" smooth={true} duration={500}>
                {/* Use ScrollLink instead of NavLink */}
                <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Resume</span>
              </ScrollLink>
            </li>
            <li className='my-2'>
              <ScrollLink to="contact" smooth={true} duration={500}>
                {/* Use ScrollLink instead of NavLink */}
                <span className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`}>Contact</span>
              </ScrollLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
