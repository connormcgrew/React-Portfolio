import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`py-10 flex justify-between ${darkMode ? 'bg-gradient-to-r from-white to-black text-white' : 'bg-gradient-to-r from-black to-white'} border-b-2 border-gray-200`}>
      <NavLink to="/">
        <h1 className={`text-xl ${darkMode ? 'bg-gray-800 text-white'  : 'bg-gray-300 text-black'}  px-4 py-2 rounded-md ml-8`}>Connor McGrew</h1>
      </NavLink>
      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl'/>
        </li>
        <li>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-white bg-gray-800' : 'text-black bg-gray-300'}`} to="/projects">Projects</NavLink>
          <NavLink download="Connor McGrew Resume" className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-white bg-gray-800' : 'text-black bg-gray-300'}`} to="/resume">Resume</NavLink>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-white bg-gray-800' : 'text-black bg-gray-300'}`} to="/contact">Contact</NavLink>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-white bg-gray-800' : 'text-black bg-gray-300'}`} to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
