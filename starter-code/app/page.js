import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import headshot from '../public/headshotphotoshop.png'


export default function Home() {
  return (
    <div>
       <main className='bg-white px-10'>
        <section className= ' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl '>Connor McGrew</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
                </li>
              <li>
                <a className='bg-amber-950 text-white px-4 py-2 rounded-md ml-8' href="#">Projects</a>
                <a className='bg-amber-950 text-white px-4 py-2 rounded-md ml-8' href="https://docs.google.com/document/d/1ntDNmD8CYUwPQpi9xtLPj0JAZ3yTq1BG/edit?usp=sharing&ouid=106751560372461322539&rtpof=true&sd=true">Resume</a>
                <a className='bg-amber-950 text-white px-4 py-2 rounded-md ml-8' href="#">Contact</a>
                </li>
            </ul>
          </nav>
          <div className='relative mx-auto overflow-hiddens mt-20 flex justify-center'>
            <Image src={headshot} alt="Picture of the author" className='rounded-full w-80 h-80 object-cover'/>
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl  mb-4 py-2'>Connor McGrew</h2>
            <h3 className='text-2xl py-2'>Fullstack Developer and Student</h3>
            <p className='text-md py-5 leading-8'>
              I am currently a student at the University of Utah Professional Education Bootcamps studying fullstack development
            </p>
          </div>
        </section>
        <footer>
        <div className='text-5xl flex justify-center gap-10 py-3'>
            <a href="https://github.com/connormcgrew"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/"><AiFillLinkedin/></a>
          </div>
          <div className='flex justify-center'>
            <p>Checkout my 
              <a href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/" className='text-amber-950'> LinkedIn </a> 
              and 
              <a href="https://github.com/connormcgrew" className='text-amber-950'> Github</a>
              !
              </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
