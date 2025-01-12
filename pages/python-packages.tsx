import React from 'react';
import ProjectsPage from '../components/ProjectsPage';
import Image from 'next/image';

const PythonPackages: React.FC = () => {
  const projects = [
    {
      title: "PDF Parser",
      description: "Python package that parses PDF files and extracts text, tables, and images, essentially a AWS Textract alternative.",
      technologies: [
        { icon: "/images/python.svg", name: "Python", invert: false }
      ],
      githubUrl: "https://github.com/chrismlittle123/pdf-parser"
    },
    {
      title: "Excel 2 Python", 
      description: "Python package that converts Excel formulas to Python code. Similar to the open-source library 'formulas' but instead of providing formulas and cells, this is built specifically for Excel tables.\n\nExcel tables are converted to pandas dataframes and the formulas are converted to pandas operations.",
      technologies: [
        { icon: "/images/python.svg", name: "Python", invert: false }
      ],
      githubUrl: "https://github.com/chrismlittle123/excel-2-python"
    }
  ];

  return (
    <ProjectsPage 
      title="Python Packages"
      projects={projects}
    />
  );
};

export default PythonPackages;