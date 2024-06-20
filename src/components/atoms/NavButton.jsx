import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ to, text, className }) => {
  return (
    <>
      <Link to={to} className={className}>
        {text}
      </Link>
    </>
  );
};

export default NavButton;

export const navBtnCode =
  'import React from "react";\nimport { Link } from "react-router-dom";\n\nconst NavButton = ({ to, text, className }) => {\n  return (\n  <>\n    <Link to={to} className={className}>\n      {text}\n    </Link>\n  </>\n  )\n};\n\nexport default NavButton;';
