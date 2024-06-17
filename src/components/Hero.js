import React from "react";

const Hero = () => {
  return (
    <header className="bg-gray-900 text-white p-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className=" py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Hello! I am Isaac Godoy
        </h1>
        <p className="mt-4 text-lg">
          Desarrollador Frontend apasionado por crear experiencias web
          interactivas y atractivas.
        </p>
        <a
          href="about"
          className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full"
        >
          Conoce más
        </a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        {/* <img
          src="../assets/profileImg.jpg"
          alt="Isaac Godoy"
          className="rounded-lg shadow-lg w-3/4 md:w-full"
        /> */}
      <svg src="https://github.com/stevenisaacgo/Isaac-portafolio/blob/Version1.0.0/src/assets/profileImg.jpg"/>
      </div>
    </header>
  );
};

export default Hero;
