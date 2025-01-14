import React from 'react';
import NavBar from '../components/NavBar';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import Image from 'next/image';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

interface TechnologyProps {
  name: string;
  icon: string;
  invert: boolean;
}

interface ProjectData {
  title: string;
  description: string;
  technologies: TechnologyProps[];
  githubUrl: string | null;
  image?: {
    src: string;
    alt: string;
  };
}

interface ProjectPageProps {
  title: string;
  projects: ProjectData[];
}

const ProjectsPage: React.FC<ProjectPageProps> = ({ title, projects }): React.ReactElement => {
  return (
    <div>
      <NavBar />
      <div className="relative">
        <Image src="/images/colours.png" alt="Background" layout="fill" className="object-cover opacity-70" />
        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            
            <h1 className="text-5xl font-bold text-white mb-16 mt-4 text-center">{title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-black bg-opacity-50 rounded-lg p-6">
                  <h2 className="text-4xl font-bold mb-6 text-center text-white">{project.title}</h2>
                  <p className="text-gray-100 mb-6 text-lg whitespace-pre-wrap">
                    {project.description}
                  </p>
                  {project.image && (
                    <div className="mb-6">
                      <Image 
                        src={`/images/${project.image.src}`}
                        alt={project.image.alt}
                        width={500}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-4">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 text-white">
                          {tech.invert ? (
                            <Image src={tech.icon} alt={tech.name} width={32} height={32} style={{filter: 'brightness(0) invert(1)'}} />
                          ) : (
                            <Image src={tech.icon} alt={tech.name} width={32} height={32} />
                          )}
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="text-blue-300 hover:text-blue-200 transition flex items-center gap-2">
                      <CodeBracketIcon className="h-4 w-4" />
                      View on GitHub →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;