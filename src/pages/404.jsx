import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-medium text-gray-600 mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">The page you are looking for doesn't exist or still in work.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
