import React from "react";
import profileImg from "assets/profileImg.webp";
import ColourfullBtn from "components/atoms/ColourfullBtn.jsx";
import Typewriter from "components/atoms/TypeWriter";

const words = [
  "Hello! I am Isaac Godoy",
  "React Developer",
  "UI/UX Designer",
  "Fullstack Developer",
];
const classNameTypewriter =
  "py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500";
const profileImgicon = profileImg;

const Hero = () => {
  return (
    <section className="text-white p-8 flex flex-col md:flex-row items-center relative">
      <div className="relative md:w-1/2 text-center md:text-left">
        <div className="static">
          <Typewriter words={words} className={classNameTypewriter} />
        </div>
        <div className="flex flex-col">
          <p className="mt-4 text-lg">
            I am a Frontend Developer with experience in creating websites and
            interactive applications.
          </p>
        </div>
        <ColourfullBtn to="/about" text="More About" />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          className="rounded-full w-80 h-auto"
          src={profileImgicon}
          alt="Imagen Circular"
        />
      </div>
    </section>
  );
};

export default Hero;
