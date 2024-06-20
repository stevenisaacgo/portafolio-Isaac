import React from "react";

import htmlIcon from "icons/html.svg";
import bootstrapIcon from "icons/bootstrap.svg";
import cssIcon from "icons/css.svg";
import javascriptIcon from "icons/javascript.svg";
import reactIcon from "icons/react.svg";
import csharpIcon from "icons/csharp.svg";
import tailwindIcon from "icons/tailwind-css.svg";
import gitIcon from "icons/github.svg";
import sqlIcon from "icons/mysql.svg";

const skills = {
  html: htmlIcon,
  bootstrap: bootstrapIcon,
  css: cssIcon,
  javascript: javascriptIcon,
  react: reactIcon,
  csharp: csharpIcon,
  tailwind: tailwindIcon,
  git: gitIcon,
  sqlIcon: sqlIcon,
};

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          My Skills and Technologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {Object.entries(skills).map(([skill, icon]) => (
            <div key={skill} className="flex justify-center">
              <img src={icon} alt={`${skill} icon`} className="h-16 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
