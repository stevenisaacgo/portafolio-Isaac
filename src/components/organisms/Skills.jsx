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
    html: { icon: htmlIcon, name: "HTML" },
    bootstrap: { icon: bootstrapIcon, name: "Bootstrap" },
    css: { icon: cssIcon, name: "CSS" },
    javascript: { icon: javascriptIcon, name: "JavaScript" },
    react: { icon: reactIcon, name: "React" },
    csharp: { icon: csharpIcon, name: "C#" },
    tailwind: { icon: tailwindIcon, name: "Tailwind CSS" },
    git: { icon: gitIcon, name: "Git" },
    sql: { icon: sqlIcon, name: "SQL" },
  };

  export default function Skills() {
    return (
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            My Skills and Technologies
          </h2>
          <div className="flex flex-row space-x-16 overflow-hidden">
            <div className="flex flex-row space-x-16 animate-loop-scroll">
              {Object.entries(skills).map(([key, { icon, name }]) => (
                <div key={key} className="flex flex-col mt-10">
                  <img
                    src={icon}
                    alt={`${name} icon`}
                    className="h-32 w-32 max-w-none"
                  />
                  <span className="mt-2 text-center text-sm text-gray-700 max-w-none">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="flex flex-row space-x-16 mt-10 animate-loop-scroll"
              aria-hidden="true"
            >
              {Object.entries(skills).map(([key, { icon, name }]) => (
                <div key={key} className="flex flex-col">
                  <img
                    src={icon}
                    alt={`${name} icon`}
                    className="h-32 w-32 max-w-none"
                  />
                  <span className="mt-2 text-center text-sm text-gray-700 max-w-none">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
