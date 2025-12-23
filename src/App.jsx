import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BotHelper from './components/BotHelper';

function App() {
  return (
    <Layout>
      <Hero />
      <div className="px-12 md:pl-24 max-w-6xl">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <BotHelper />
    </Layout>
  );
}

export default App;
