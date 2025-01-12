import React from 'react';
import ProjectPage from '../components/ProjectsPage';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const PythonPackages: React.FC = () => {
  return (
    <ProjectPage 
      title="Python Packages" 
      description="Open-source Python library contributions" 
      icon={CodeBracketIcon} 
      projects={["Python Package Project 1", "Python Package Project 2"]}
    />
  );
};

export default PythonPackages; 