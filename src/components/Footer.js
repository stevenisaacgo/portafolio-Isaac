import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div>
            <h6>Isaac Godoy Ortega</h6>
            <p className="text-gray-700">&copy; 2023 My Personal Website. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">About Me</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Achievements</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Programming Knowledge</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Work Experience</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Me</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Footer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Skills</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">HTML</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">CSS</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">JavaScript</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Python</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Java</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Projects</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Project 1</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Project 2</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Project 3</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Project 4</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Project 5</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Certificates</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Certificate 1</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Certificate 2</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Certificate 3</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Certificate 4</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Certificate 5</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Blog</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog Post 1</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog Post 2</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog Post 3</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog Post 4</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog Post 5</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
