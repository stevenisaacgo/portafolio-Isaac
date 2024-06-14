import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-lg font-bold">
            <img src={user} alt="usericon" className="w-10 h-10 rounded-full" />
            <Link to="/">Isaac Godoy Ortega</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/projects" className="text-gray-600 hover:text-blue-600">Projects</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
