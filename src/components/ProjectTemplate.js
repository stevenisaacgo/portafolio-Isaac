import React from 'react';
  
export default function ProjectTemplate({ project }) {
  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">{project.name}</h2>
          <p className="mt-4 text-gray-500">{project.description}</p>
          <p className="mt-2 text-gray-500"><strong>Technologies:</strong> {project.technologies}</p>
          <p className="mt-2 text-gray-500"><strong>Start Date:</strong> {project.startDate}</p>
          <p className="mt-2 text-gray-500"><strong>End Date:</strong> {project.endDate}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {project.features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium ">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project image ${index + 1}`}
              className="rounded-lg bg-gray-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
