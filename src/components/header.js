import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`py-10 flex justify-between ${darkMode ? 'bg-gradient-to-r from-neutral-900 to-zinc-200 text-white' : 'bg-gradient-to-r from-zinc-200 to-neutral-900'}`}>
      <NavLink to="/">
        <h1 className={`text-xl ${darkMode ? 'dark'  : 'light'} navhvr px-4 py-2 rounded-md ml-8`}>Connor McGrew</h1>
      </NavLink>
      <ul className='flex items-center mr-8'>
        <li>
          <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl'/>
        </li>
        <li>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'dark' : 'light'} navhvr`} to="/projects">Projects</NavLink>
          <NavLink download="Connor McGrew Resume" className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'dark' : 'light'} navhvr`} to="/resume">Resume</NavLink>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'dark' : 'light'} navhvr`} to="/contact">Contact</NavLink>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'dark' : 'light'} navhvr`} to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
