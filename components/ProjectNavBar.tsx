import React from 'react';
import Image from 'next/image';

interface ProjectNavBarProps {
  projects: string[];
}

const ProjectNavBar: React.FC<ProjectNavBarProps> = ({ projects }) => {
  return (
    <aside className="w-1/5 text-gray-400 p-4 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/colours_vertical.png"
          alt="Background"
          fill
          className="object-cover blur-[32px]"
        />
      </div>
      <ul className="relative z-10 h-screen flex flex-col justify-center">
        {projects.map((project, index) => (
          <li key={index} className="mb-2">
            <a href={`#project-${index + 1}`} className="font-roboto text-lg uppercase text-black">
              {project}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectNavBar;
