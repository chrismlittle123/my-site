import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { CogIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const SoftwareEngineering: React.FC = () => {
  const projects = [
    {
      title: "Full-Stack Web App",
      description: "Modern web application built with React, Node.js and PostgreSQL. Features authentication, real-time updates, and responsive design.",
      technologies: [
        { icon: CodeBracketIcon, name: "React" },
        { icon: CodeBracketIcon, name: "Node.js" },
        { icon: CodeBracketIcon, name: "PostgreSQL" }
      ],
      githubUrl: "https://github.com/username/fullstack-webapp"
    },
    {
      title: "API Service",
      description: "RESTful API service built with Express and MongoDB. Includes rate limiting, caching, authentication and comprehensive documentation.",
      technologies: [
        { icon: CodeBracketIcon, name: "Express" },
        { icon: CodeBracketIcon, name: "MongoDB" },
        { icon: CodeBracketIcon, name: "TypeScript" }
      ],
      githubUrl: "https://github.com/username/api-service"
    }
  ];

  return (
    <ProjectsPage 
      title="Software Engineering"
      description="Full-stack development"
      icon={CogIcon}
      projects={projects}
    />
  );
};

export default SoftwareEngineering;