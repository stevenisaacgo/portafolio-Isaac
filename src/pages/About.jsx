import React, { Suspense, lazy, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { GradientText } from "components/atoms/GradientText";
import Loader from "../components/atoms/Loader";

// Lazy load a component that returns the image
const ExperienceImage = lazy(() => import("components/atoms/ExperienceImage"));
const PassionImage = lazy(() => import("components/atoms/PassionImage"));
const MachineLearningImage = lazy(() => import("components/atoms/MachineLearningImage"));

const data = [
  {
    title: "Experience",
    content: "I have more than 1 year of experience in frontend web development, working on creating websites and interactive applications. I have participated in various projects, from corporate websites to e-commerce platforms, acquiring skills in the use of popular frameworks and libraries such as React.",
    image: <ExperienceImage />,
  },
  {
    title: "Passion for Web Development",
    content: "I am passionate about frontend web development. I love working with HTML, CSS and JavaScript to create dynamic and visually appealing websites. I enjoy exploring new techniques and trends in design and user interaction, always seeking to improve the visitor experience.",
    image: <PassionImage />,
  },
  {
    title: "Continuous Learning",
    content: "I am constantly learning new technologies and techniques to improve my skills. I am always looking for ways to improve my skills and expand my knowledge.",
    image: <MachineLearningImage />,
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % data.length);

  const prevSlide = () => setCurrentIndex((currentIndex - 1 + data.length) % data.length);

  return (
      <section className="bg-gray-900 text-white py-12 px-4 flex flex-col">
        <GradientText text="About Me" fromColor="from-blue-500" toColor="to-pink-500" className="text-4xl font-bold mb-8 text-center" />
        <div className="max-w-4xl bg-gray-800 mx-auto px-10 relative shadow-lg">
          <div className="p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              {data[currentIndex].title}
            </h3>
            <p className="text-lg">{data[currentIndex].content}</p>
            <Suspense fallback={<Loader/>}>
              {data[currentIndex].image}
            </Suspense>
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
