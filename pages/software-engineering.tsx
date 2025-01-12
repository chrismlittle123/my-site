import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { CogIcon } from '@heroicons/react/24/outline';

const SoftwareEngineering: React.FC = () => {
  return (
    <ProjectPage 
      title="Software Engineering" 
      description="Full-stack development" 
      icon={CogIcon} 
      projects={["Software Engineering Project 1", "Software Engineering Project 2"]}
    />
  );
};

export default SoftwareEngineering; 