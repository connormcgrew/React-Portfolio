import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home.js'
import Projects from './pages/projects.js'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
