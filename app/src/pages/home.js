import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={` ${darkMode ? 'bg-neutral-900 text-white' : 'bg-zinc-200 text-black'}`}>
      <main className='px-10'>
        <section className='min-h-screen'>

          <div className='relative mx-auto overflow-hiddens pt-10 flex justify-center'>
            <img src="/images/headshotphotoshop.png" alt="Author's Headshot" className='rounded-full w-80 h-80 object-cover'/>
          </div>
          <div className='text-center p-10'>
            <h2 className='text-6xl  mb-4 py-2'>Connor McGrew</h2>
            <h3 className='text-2xl py-2'>Fullstack Developer and Student</h3>
            <p className='text-md py-5 leading-8'>
              I am currently a student at the University of Utah Professional Education Bootcamps studying Full-Stack Development.
               I am located in Lehi and have 6 months of experience. 
               I am currently looking for a job in the field of Full-Stack Development, Front-End Developer, or Back-End Developer. 
               I am a hard worker and a quick learner.
                I am also a very good team player and I am very easy to get along with.
                 I am very passionate about coding and I am very excited to start my career!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
