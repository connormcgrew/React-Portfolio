import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="contact">
    <div className={`py-10 px-4  ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="text-5xl font-bold mb-6 flex justify-center">Contact Me</h1>
      <div className="flex flex-col items-center">
        <div className={`max-w-md w-full shadow-md rounded-lg p-6 mb-6 ${darkMode ? 'light' : 'dark'}`}>
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <p className="mb-4">
            If you have any questions or inquiries, feel free to contact me via my{" "}
            <a
              href="https://www.linkedin.com/in/connor-mcgrew-0b7118243/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:text-blue-400 focus:text-blue-400 transition-colors duration-300 ease-in-out"
            >
              LinkedIn
            </a>{" "}
            or shoot me an email @
            <a
              href="mailto:connormcgrewjobs@gmail.com"
              className="mainhvr"
            >
              connormcgrewjobs@gmail.com
            </a>
            ! I'll be happy to hear from you!
          </p>
          <ScrollLink
            to = "contact"
            smooth={true}
            duration={500}
          >
          </ScrollLink>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
