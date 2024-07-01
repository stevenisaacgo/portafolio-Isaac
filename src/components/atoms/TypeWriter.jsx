import React, { useState, useEffect } from "react";

const Typewriter = ({ words, className }) => {
  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(words[currentWordIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      } else {
        setText(words[currentWordIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === words[currentWordIndex].length) {
          setIsDeleting(true);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, charIndex, words, currentWordIndex]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className={className}>{text}</h1>
    </div>
  );
};

export default Typewriter;
