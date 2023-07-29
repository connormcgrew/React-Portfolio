import { BsFillMoonStarsFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
<nav className='py-10 mb-12 flex justify-between'>
<NavLink to="/"><h1 className='text-xl bg-amber-800 text-white px-4 py-2 rounded-md ml-8'>Connor McGrew</h1> </NavLink>
<ul className='flex items-center'>
  <li>
    <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
    </li>
  <li>
    <NavLink className='bg-amber-800 text-white px-4 py-2 rounded-md ml-8' to="/projects">Projects</NavLink>
    <NavLink download="Connor McGrew Resume" className='bg-amber-800 text-white px-4 py-2 rounded-md ml-8' to="/resume">Resume</NavLink>
    <NavLink className='bg-amber-800 text-white px-4 py-2 rounded-md ml-8' to="/contact">Contact</NavLink>
    <NavLink className='bg-amber-800 text-white px-4 py-2 rounded-md ml-8' to="/">Home</NavLink>
  </li>
</ul>
</nav>
    )
}

export default Header;