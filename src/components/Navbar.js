import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.svg";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-lg font-bold">
            <img src={user} alt="usericon" className="w-10 h-10 rounded-full" />
            <Link to="/">DevelopedbyIsaac</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/projects" className=" hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Projects
            </Link>
            <Link to="/about" className=" hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              About
            </Link>
            <Link to="/contact" className=" hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
