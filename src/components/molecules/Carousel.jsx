import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const data = [
  {
    title: "Exemple Title",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Exemple Title",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Exemple Title",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "https://via.placeholder.com/150",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  return (
    <section className="text-white py-12 px-4">
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

export default Carousel;
