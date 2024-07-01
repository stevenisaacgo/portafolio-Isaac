import React, { lazy, Suspense } from 'react';
import Loader from 'components/atoms/loader/Loader.jsx';

const Hero = lazy(() => import('components/molecules/Hero.jsx'));
const Skills = lazy(() => import('components/organisms/Skills.jsx'));

const Home = () => {
  return (
    <section className='container mx-auto'>
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense> 
      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>
    </section>
  );
};

export default Home;
