import React from 'react';
import ProjectPage from '../components/ProjectsPage';
import { CircleStackIcon } from '@heroicons/react/24/outline';

const DataEngineering: React.FC = () => {
  return (
    <ProjectPage 
      title="Data Engineering" 
      description="Scalable data pipelines and infrastructure" 
      icon={CircleStackIcon} 
      projects={["Data Engineering Project 1", "Data Engineering Project 2"]}
    />
  );
};

export default DataEngineering; 