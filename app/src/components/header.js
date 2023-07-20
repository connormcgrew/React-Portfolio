import { BsFillMoonStarsFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
<nav className='py-10 mb-12 flex justify-between'>
<h1 className='text-xl '>Connor McGrew</h1>
<ul className='flex items-center'>
  <li>
    <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
    </li>
  <li>
    <NavLink className='bg-amber-950 text-white px-4 py-2 rounded-md ml-8' to="/projects">Projects</NavLink>
    <a download="Connor McGrew Resumea" className='bg-amber-950 text-white px-4 py-2 rounded-md ml-8' href="/images/resume.pdf">Resume</a>
    <NavLink className='bg-amber-950 text-white px-4 py-2 rounded-md ml-8' to="/contact">Contact</NavLink>
    <NavLink className='bg-amber-950 text-white px-4 py-2 rounded-md ml-8' to="/">Home</NavLink>

    </li>
</ul>
</nav>
    )
}

export default Header;