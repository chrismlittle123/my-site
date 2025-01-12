import React, { ReactElement } from 'react';
import ProjectNavBar from './ProjectNavBar';
import NavBar from './NavBar';
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
      <div className="flex">
        <ProjectNavBar projects={projects} />
        <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-64px)] bg-background">
          <div className="text-center">
            <Icon className="h-12 w-12 mb-4" />
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            <div className="mt-8">
              {projects.map((project, index) => (
                <div key={index} id={`project-${index + 1}`} className="mb-4 font-roboto text-2xl uppercase text-black">
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;