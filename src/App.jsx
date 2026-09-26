import React from 'react';
import Home from './pages/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './utils/CursorAnimation';

export default function App() {
  return (
    <div className="font-sora scroll-smooth overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300 min-h-screen bg-[#07070e] text-[#f1f5f9]">
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
