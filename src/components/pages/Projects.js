import React from 'react';
import ProjectTemplate from '../ProjectTemplate.js';

const projects = [
  {
    name: 'Project Alpha',
    description: 'A web application designed to streamline project management tasks.',
    technologies: 'React, Node.js, MongoDB',
    startDate: 'January 2021',
    endDate: 'March 2022',
    features: [
      { name: 'Feature 1', description: 'User authentication and authorization' },
      { name: 'Feature 2', description: 'Task management with deadlines and notifications' },
      { name: 'Feature 3', description: 'Collaborative document editing' },
      { name: 'Feature 4', description: 'Real-time chat and discussion forums' },
    ],
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
      'https://example.com/image4.jpg',
    ],
  },
  {
    name: 'Project Beta',
    description: 'A web application designed to streamline project management tasks.',
    technologies: 'React, Node.js, MongoDB',
    startDate: 'January 2021',
    endDate: 'March 2022',
    features: [
      { name: 'Feature 1', description: 'User authentication and authorization' },
      { name: 'Feature 2', description: 'Task management with deadlines and notifications' },
      { name: 'Feature 3', description: 'Collaborative document editing' },
      { name: 'Feature 4', description: 'Real-time chat and discussion forums' },
    ],
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
      'https://example.com/image4.jpg',
    ],
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-50">
      {projects.map((project, index) => (
        <ProjectTemplate key={index} project={project} />
      ))}
    </div>
  );
}
