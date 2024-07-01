import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "assets/user.svg";
import NavButton from "components/atoms/NavButton";

const gradientBackground = "hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-lg font-bold">
            <img src={user} alt="usericon" className="w-10 h-10 rounded-full" />
            <Link to="/home">DevelopedbyIsaac</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavButton to="/projects" text="projects" className={gradientBackground} />
            <NavButton to="/about" text="About" className={gradientBackground} />
            <NavButton to="/contact" text="Contact" className={gradientBackground} />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-3 space-y-2">
            <NavButton to="/projects" text="Projects" className= {`block ${gradientBackground}`} />
            <NavButton to="/about" text="About" className= {`block ${gradientBackground}`} />
            <NavButton to="/contact" text="Contact" className= {`block ${gradientBackground}`} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
