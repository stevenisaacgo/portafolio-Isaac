import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ({sections, textTitle, textSubtitle}) => {

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div>
            <h6>{textTitle}</h6>
            <p className="text-gray-300">{textSubtitle}</p>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-200">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link} className="text-gray-300 hover:text-gray-800">{section.content[idx]}</Link>
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

export const footerCode = `import React from 'react';
import {Link} from 'react-router-dom';

const Footer = ({sections, textTitle, textSubtitle}) => {

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div>
            <h6>{textTitle}</h6>
            <p className="text-gray-300">{textSubtitle}</p>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-gray-200">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link} className="text-gray-300 hover:text-gray-800">{section.content[idx]}</Link>
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

export default Footer;`