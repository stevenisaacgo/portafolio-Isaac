import React from 'react';
import Hero from 'components/molecules/Hero.jsx';
import Skills from 'components/organisms/Skills.jsx';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
      <Skills />
    </div>
  );
};

export default Home;
