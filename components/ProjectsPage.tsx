import React, { ReactElement } from 'react';
import NavBar from '../components/NavBar';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
import Image from 'next/image';
import { GitHubIcon } from '@primer/octicons-react';

interface ProjectPageProps {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  projects: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, description, icon: Icon, projects }) => {
  return (
    <div>
      <NavBar />
      <div className="relative">
        <Image src="/images/colours.jpg" alt="Background" layout="fill" className="object-cover opacity-30" />
        <div className="relative z-10 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8 text-center">{title}</h1>
            <p className="text-xl text-gray-100 mb-16 text-center">{description}</p>

            <div className="grid grid-cols-2 gap-x-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">{projects[0]}</h2>
                <p className="text-gray-100 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <a href="https://github.com" className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2">
                  <GitHubIcon size={16} />
                  View on GitHub →
                </a>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white mb-6 text-center">{projects[1]}</h2>
                <p className="text-gray-100 mb-6">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <a href="https://github.com" className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2">
                  <GitHubIcon size={16} />
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;