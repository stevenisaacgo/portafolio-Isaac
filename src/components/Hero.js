import React from 'react';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Personal Web</h1>
        <p className="text-gray-600 mt-4">Showcasing achievements, programming knowledge, and work experience</p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Contact</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
