import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function Home() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={` ${darkMode ? 'dark' : 'light'}`}>
      <main className=''>
        <section id="about">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
            <div className='text-center p-10 col-span-2 md:col-span-1 lg:col-span-2'>
              <h2 className='text-5xl py-2 font-bold'>About Me</h2>
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
              </p>
            </div>
            <div className='relative mx-auto'>
              <img src="/images/headshotphotoshop.png" alt="Author's Headshot" className='rounded-full w-80 object-cover'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


// AOS (animate on scroll)  library for scrolling animations
// under About Me section, add a carousel of images of me
// slideshow of interests/ hobbies? swiper or slick carousel
// under headshot image, add paragraph of hobbies/interests