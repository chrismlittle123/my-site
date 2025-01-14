import React from 'react';
import Link from 'next/link';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

interface ProjectTileProps {
  href: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  iconColor?: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ href, icon: Icon, title, description, iconColor = "text-purple-700" }) => {
  return (
    <Link 
      href={href} 
      className="bg-black bg-opacity-60 p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center relative before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_15px_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-lg after:shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]"
    >
      <Icon className={`h-8 w-8 mb-2 ${iconColor}`} />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-center">{description}</p>
    </Link>
  );
};

export default ProjectTile;
