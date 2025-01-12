import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const PythonPackages: React.FC = () => {
  const projects = [
    {
      title: "PDF Parser",
      description: "Python package that parses PDF files and extracts text, tables, and images, essentially a AWS Textract alternative.",
      technologies: [
        { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32} />, name: "Python" }
      ],
      githubUrl: "https://github.com/chrismlittle123/pdf-parser"
    },
    {
      title: "Excel 2 Python", 
      description: "Python package that converts Excel formulas to Python code. Similar to the open-source library 'formulas' but instead of providing formulas and cells, this is built specifically for Excel tables. Excel tables are converted to pandas dataframes and the formulas are converted to pandas operations.",
      technologies: [
        { icon: () => <Image src="/images/python.svg" alt="Python" width={32} height={32} />, name: "Python" }
      ],
      githubUrl: "https://github.com/chrismlittle123/excel-2-python"
    }
  ];

  return (
    <ProjectsPage 
      title="Python Packages"
      icon={CodeBracketIcon}
      projects={projects}
    />
  );
};

export default PythonPackages;