import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`py-10 flex justify-between ${darkMode ? 'bg-gradient-to-r from-black to-white text-white' : 'bg-gradient-to-r from-white to-black'}`}>
      <NavLink to="/">
        <h1 className={`text-xl ${darkMode ? 'bg-neutral-900 text-zinc-200'  : 'bg-zinc-200 text-black'} hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-md ml-8`}>Connor McGrew</h1>
      </NavLink>
      <ul className='flex items-center mr-8'>
        <li>
          <BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl'/>
        </li>
        <li>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-zinc-200 bg-neutral-900' : 'text-black bg-zinc-200'} hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-colors duration-300 ease-in-out`} to="/projects">Projects</NavLink>
          <NavLink download="Connor McGrew Resume" className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-zinc-200 bg-neutral-900' : 'text-black bg-zinc-200'} hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-colors duration-300 ease-in-out`} to="/resume">Resume</NavLink>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-zinc-200 bg-neutral-900' : 'text-black bg-zinc-200'} hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-colors duration-300 ease-in-out`} to="/contact">Contact</NavLink>
          <NavLink className={`px-4 py-2 rounded-md ml-8 ${darkMode ? 'text-zinc-200 bg-neutral-900' : 'text-black bg-zinc-200'} hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white transition-colors duration-300 ease-in-out`} to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
