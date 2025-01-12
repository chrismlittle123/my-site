import React, { ReactElement, useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import Image from 'next/image';
import { CodeBracketIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface TechnologyProps {
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  name: string;
}

interface ProjectData {
  title: string;
  description: string;
  technologies: TechnologyProps[];
  githubUrl: string | null;
  images?: {
    src: string;
    alt: string;
  }[];
}

interface ProjectPageProps {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  projects: ProjectData[];
}

const ProjectsPage: React.FC<ProjectPageProps> = ({ title, description, icon: Icon, projects }) => {
  const [currentSlides, setCurrentSlides] = useState<{ [key: number]: number }>({});
  const [isTransitioning, setIsTransitioning] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    // Initialize current slide for each project
    const initialSlides = projects.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {} as { [key: number]: number });
    setCurrentSlides(initialSlides);

    // Set up interval for slideshow
    const interval = setInterval(() => {
      moveSlide('right');
    }, 5000);

    return () => clearInterval(interval);
  }, [projects]);

  const moveSlide = (direction: 'left' | 'right', projectIndex?: number) => {
    if (projectIndex !== undefined && isTransitioning[projectIndex]) return;

    setCurrentSlides(prev => {
      const newSlides = { ...prev };
      projects.forEach((project, index) => {
        if ((projectIndex === undefined || projectIndex === index) && project.images && project.images.length > 0) {
          if (direction === 'right') {
            newSlides[index] = (prev[index] + 1) % project.images.length;
          } else {
            newSlides[index] = prev[index] === 0 ? project.images.length - 1 : prev[index] - 1;
          }
        }
      });
      return newSlides;
    });

    if (projectIndex !== undefined) {
      setIsTransitioning(prev => ({ ...prev, [projectIndex]: true }));
      setTimeout(() => {
        setIsTransitioning(prev => ({ ...prev, [projectIndex]: false }));
      }, 500);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="relative">
        <Image src="/images/colours.png" alt="Background" layout="fill" className="object-cover opacity-70" />
        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-12 text-center">{title}</h1>

            <div className="grid grid-cols-2 gap-x-20">
              {projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-black bg-opacity-60 rounded-lg p-6">
                  <h2 className="text-4xl font-bold mb-6 text-center">{project.title}</h2>
                  <p className="text-gray-100 mb-6 text-lg whitespace-pre-wrap">
                    {project.description}
                  </p>
                  {project.images && project.images.length > 0 && (
                    <div className="mb-6 relative group">
                      <div className={`transition-opacity duration-500 ${isTransitioning[projectIndex] ? 'opacity-50' : 'opacity-100'}`}>
                        <Image 
                          src={`/images/${project.images[currentSlides[projectIndex]].src}`}
                          alt={project.images[currentSlides[projectIndex]].alt}
                          width={500}
                          height={300}
                          className="rounded-lg"
                        />
                      </div>
                      
                      <button 
                        onClick={() => moveSlide('left', projectIndex)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ChevronLeftIcon className="h-6 w-6 text-white" />
                      </button>
                      
                      <button 
                        onClick={() => moveSlide('right', projectIndex)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ChevronRightIcon className="h-6 w-6 text-white" />
                      </button>

                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {project.images.map((_, index) => (
                          <div
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                              index === currentSlides[projectIndex] 
                                ? 'bg-white' 
                                : 'bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-4">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 text-white">
                          <tech.icon className="h-6 w-6" />
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