import React, { ReactElement } from 'react';
import NavBar from '../components/NavBar';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

interface ProjectPageProps {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  projects: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, description, icon: Icon, projects }) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <Icon className="h-12 w-12 mb-4" />
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
        <div className="mt-8">
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              {project}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;