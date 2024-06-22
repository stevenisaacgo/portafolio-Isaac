import React from 'react';
import './Loader.css'; // Import the custom CSS for the animation

const Loader = () => {
  return (
    <div className="relative w-full rotate-45">
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="absolute w-7 h-7 m-0.5 bg-white"
          style={{ animation: `square-animation 10s ease-in-out infinite both`, animationDelay: `${-index * 1.4285714286}s` }}
        ></div>
      ))}
    </div>
  );
};

export default Loader;
