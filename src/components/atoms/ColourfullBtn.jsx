import React from "react";
import { Link } from "react-router-dom";

const ColourfullBtn = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full"
    >
      {text}
    </Link>
  );
};
export default ColourfullBtn;

export const colourfullBtnCode = `import React from 'react';
import { Link } from "react-router-dom";


const ColourfullBtn = ({ text, to }) => {
    return(
        <Link to={to}
        className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full"
        >
        {text}
      </Link>
    )
};
export default ColourfullBtn;`;
