import React from 'react';
import ProjectPage from '../components/ProjectsPage';
import { CpuChipIcon } from '@heroicons/react/24/outline';

const MachineLearning: React.FC = () => {
  return (
    <ProjectPage 
      title="Machine Learning" 
      description="ML model development and GenAI" 
      icon={CpuChipIcon} 
      projects={["Machine Learning Project 1", "Machine Learning Project 2"]}
    />
  );
};

export default MachineLearning; 