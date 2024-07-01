import React from "react";
import profileImg from "assets/profileImg.webp";
import ColourfullBtn from "components/atoms/ColourfullBtn.jsx";
import Typewriter from "components/atoms/TypeWriter";

const words = ["Frontend Developer", "React Developer", "UI/UX Designer", "Fullstack Developer"];
const classNameTypewriter = "py-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500";

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white p-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <Typewriter words={words} className={classNameTypewriter}/>
        <p className="mt-4 text-lg">
          I am a Frontend Developer with experience in creating websites and
          interactive applications.
        </p>
        <ColourfullBtn to="/about" text="More About" />
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={profileImg}
          alt="Portrait of Isaac Godoy"
          className="rounded-lg md:w-64"
        />
      </div>
    </section>
  );
};

export default Hero;
