import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import MissionVision from '../components/Sections/MissionVision';
import Objectives from '../components/Sections/Objectives';

import Contact from '../components/Sections/Contact';

const Home = () => {
  return (
    <div id="home-page">
      <Hero />
      <About />
      <MissionVision />
      <Objectives />
     
      <Contact />
    </div>
  );
};

export default Home;