import { useContext, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className={`py-10 flex justify-between items-center ${darkMode ? 'bg-gradient-to-r from-neutral-900 to-zinc-200 text-white' : 'bg-gradient-to-r from-zinc-200 to-neutral-900'}`}>
      <div className="flex items-center">
        <NavLink to="/">
          <h1 className={`text-xl ${darkMode ? 'dark' : 'light'} navhvr px-4 py-2 rounded-md ml-8`}>Connor McGrew</h1>
        </NavLink>
        <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl ml-4 ' />
      </div>
      <div className="hidden md:flex items-center">
        <ul className='flex mr-4'>
          <li className="ml-4">
            <NavLink className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/">Home</NavLink>
          </li>
          <li className="ml-4">
            <NavLink className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/projects">Projects</NavLink>
          </li>
          <li className="ml-4">
            <NavLink download="Connor McGrew Resume" className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/resume">Resume</NavLink>
          </li>
          <li className="ml-4">
            <NavLink className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/contact">Contact</NavLink>
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
              <NavLink className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/">Home</NavLink>
            </li>
            <li className='my-2'>
              <NavLink className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/projects">Projects</NavLink>
            </li>
            <li className='my-2'>
              <NavLink download="Connor McGrew Resume" className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/resume">Resume</NavLink>
            </li>
            <li className='my-2'>
              <NavLink className={`px-4 py-2 rounded-md ${darkMode ? 'dark' : 'light'} navhvr`} to="/contact">Contact</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
