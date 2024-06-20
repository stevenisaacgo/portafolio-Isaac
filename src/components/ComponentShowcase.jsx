import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ComponentShowcase = ({ code }) => {
  return(
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
    <SyntaxHighlighter language="jsx" style={coy}>
      {code}
    </SyntaxHighlighter>
  </div>
  )
};

export default ComponentShowcase;