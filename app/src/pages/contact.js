import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`py-10 px-4 ${darkMode ? 'bg-neutral-900 text-white' : 'bg-zinc-200 text-black'}`}>
      <h1 className="text-5xl font-bold mb-6">Contact</h1>
      <div className="flex flex-col items-center">
        <div className={`max-w-md w-full shadow-md rounded-lg p-6 mb-6 ${darkMode ? 'bg-zinc-200 text-black' : 'bg-neutral-900 text-white'}`}>
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <p className="mb-4">
            If you have any questions or inquiries, feel free to contact me via my 
            {" "}
          <a href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/" className={`${darkMode ? 'text-blue-700': 'text-neutral-900'} hover:text-blue-700 focus:text-blue-700 transition-colors duration-300 ease-in-out ${darkMode ? 'text-blue-400' : 'text-blue-400'}`}>
            LinkedIn
          </a>{" "}
           or shoot me an email @
           <a href="mailto:connormcgrewjobs@gmail.com" className={`${darkMode ? 'text-pink-500': 'text-neutral-900'} hover:text-pink-700 focus:text-pink-700 transition-colors duration-300 ease-in-out ${darkMode ? 'text-pink-500' : 'text-pink-500'}`}>connormcgrewjobs@gmail.com
           </a>
            ! I'll be happy to hear from you!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
