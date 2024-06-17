import React from 'react';

const sections = [
  {
    title: 'About Me',
    links: ['Achievements', 'Programming Knowledge', 'Contact Me'],
  },
  {
    title: 'Skills',
    links: ['HTML', 'CSS', 'JavaScript', 'React','C#', 'Tailwind CSS', 'SQL'],
  },
  {
    title: 'Projects',
    links: ['Project 1'],
  },
  {
    title: 'Certificates',
    links: ['Certificate FrontEnd', 'Certificate DAM'],
  },
  {
    title: 'Social',
    links: ['LinkedIn', 'Github'],
  },
];
const Footer = () => {

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div>
            <h6>Isaac Godoy Ortega</h6>
            <p className="text-gray-300">&copy; 2023 My Personal Website. All rights reserved.</p>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-200">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link} className="text-gray-300 hover:text-gray-800">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
