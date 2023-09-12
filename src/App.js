import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Contact from './pages/contact';
import Resume from './pages/resume';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {


  return (
    <BrowserRouter>
      <DarkModeProvider>
      <Header />
      <Home />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
