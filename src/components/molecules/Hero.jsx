import React from "react";
import profileImg from "assets/profileImg.jpeg";
import ColourfullBtn from "components/atoms/ColourfullBtn.jsx";

const Hero = () => {
  return (
    <header className="bg-gray-900 text-white p-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className=" py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Hello! I am Isaac Godoy
        </h1>
        <p className="mt-4 text-lg">
          I am a Frontend Developer with experience in creating websites and
          interactive applications.
        </p>
        <ColourfullBtn to="/about" text="More About"/>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={profileImg}
          alt="Isaac Godoy"
          className="rounded-lg md:w-64"
        />
      </div>
    </header>
  );
};

export default Hero;
