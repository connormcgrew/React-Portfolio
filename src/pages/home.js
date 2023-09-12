import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { Link as ScrollLink } from 'react-scroll';

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={` ${darkMode ? 'dark' : 'light'}`}>
      <main className='px-10'>
        <section id="home">
          <div className='relative mx-auto overflow-hiddens pt-10 flex justify-center'>
            <img src="/images/headshotphotoshop.png" alt="Author's Headshot" className='rounded-full w-80 h-80 object-cover'/>
          </div>
          <div className='text-center p-10'>
            <h2 className='text-6xl  mb-4 py-2'>Connor McGrew</h2>
            <h3 className='text-2xl py-2'>Fullstack Developer</h3>
            <p className='text-md py-5 leading-8'>
              I am a graduate of the Full Stack Development Bootcamp at the University of Utah.
              With one year of coding experience, I am currently seeking a job in Full-Stack, Front-End, or Back-End Development.
              <ul>
                Some of my strengths include React.js, JavaScript, HTML, CSS, Node.js, Express.js, and Git.
              </ul>
              <ul>
                I am an avid learner, a hard worker, and a great team player.
                Being passionate and dedicated to coding, I am excited to start my career!
              </ul>
              <ul>
              Beyond my professional endeavors, my interests span various areas. 
              I'm an enthusiastic skier and a dedicated traveler, finding relaxation and excitement in both.
               My competitive diving background has instilled in me a deep appreciation for challenge and precision. 
              </ul>
            </p>
          </div>
          <div className='text-center'>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
            >
            </ScrollLink>
          </div>
        </section>
      </main>
    </div>
  );
}
