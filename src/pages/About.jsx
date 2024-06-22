import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import machineLearningImage from "assets/artificial-machine-learning.svg";
import experienceImage from "assets/employee-works-remotely.svg";
import passionImage from "assets/business-discussion.svg";

const data = [
  {
    title: "Experience",
    content:
      "I have more than 1 year of experience in frontend web development, working on creating websites and interactive applications. I have participated in various projects, from corporate websites to e-commerce platforms, acquiring skills in the use of popular frameworks and libraries such as React.",
    image: experienceImage,
  },
  {
    title: "Passion for Web Development",
    content:
      "I am passionate about frontend web development. I love working with HTML, CSS and JavaScript to create dynamic and visually appealing websites. I enjoy exploring new techniques and trends in design and user interaction, always seeking to improve the visitor experience.",
    image: passionImage,
  },
  {
    title: "Continuous Learning",
    content:
      "I am constantly learning new technologies and techniques to improve my skills. I am always looking for ways to improve my skills and expand my knowledge.",
    image: machineLearningImage,
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto px-10 relative">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            {data[currentIndex].title}
          </h3>
          <p className="text-lg">{data[currentIndex].content}</p>
          <img
            src={data[currentIndex].image}
            alt={data[currentIndex].title}
            className="md:w-80 mt-4 mx-auto"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full"
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full"
        >
          <NavigateNextIcon />
        </button>
      </div>
    </section>
  );
};

export default About;
