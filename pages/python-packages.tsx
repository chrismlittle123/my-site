import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const PythonPackages: React.FC = () => {
  const projects = [
    {
      title: "Python Package 1",
      description: "Open source Python library for data processing and analysis. Includes utilities for ETL workflows, data validation, and common data transformations.",
      technologies: [
        { icon: CodeBracketIcon, name: "Python" },
        { icon: CodeBracketIcon, name: "PyPI" },
        { icon: CodeBracketIcon, name: "Pandas" }
      ],
      githubUrl: "https://github.com/username/python-package-1"
    },
    {
      title: "Python Package 2", 
      description: "Python package providing machine learning model utilities and helper functions. Includes data preprocessing, feature engineering, and model evaluation tools.",
      technologies: [
        { icon: CodeBracketIcon, name: "Python" },
        { icon: CodeBracketIcon, name: "PyPI" },
        { icon: CodeBracketIcon, name: "NumPy" }
      ],
      githubUrl: "https://github.com/username/python-package-2"
    }
  ];

  return (
    <ProjectsPage 
      title="Python Packages"
      description="Open-source Python library contributions"
      icon={CodeBracketIcon}
      projects={projects}
    />
  );
};

export default PythonPackages;