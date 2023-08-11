import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Contact from './pages/contact';
import Resume from './pages/resume';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {


  return (
    <HashRouter>
    <div className='min-h-screen'>
      <DarkModeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
      </DarkModeProvider>
      </div>
    </HashRouter>
  );
}

export default App;
