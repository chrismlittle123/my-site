import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import { DocumentTextIcon, LinkIcon, CodeBracketIcon, CpuChipIcon, CogIcon, CircleStackIcon } from '@heroicons/react/24/outline';
import ProjectTile from '../components/ProjectTile';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <header className="flex flex-col items-center justify-center pt-20">
        <Image src="/images/me.jpeg" alt="My Photo" width={150} height={150} className="rounded-full mb-8" />
        <h1 className="text-4xl font-bold mb-8">Christopher Little — Data Consultant</h1>

        <p className="text-lg mb-14">Welcome to my personal portfolio site.</p>
        <div className="grid grid-cols-3 gap-x-24 mb-24 w-full max-w-2xl mx-auto">
          <a href="https://www.linkedin.com/in/christopher-little-897a44102/" className="hover:opacity-75 transition flex flex-col items-center">
            <LinkIcon className="h-8 w-8 mb-4 text-blue-600" />
            <span className="text-xl font-mono">LinkedIn</span>
          </a>
          <a href="https://github.com/chrismlittle123" className="hover:opacity-75 transition flex flex-col items-center">
            <CodeBracketIcon className="h-8 w-8 mb-4 text-red-600" />
            <span className="text-xl font-mono">GitHub</span>
          </a>
          <a href="https://drive.google.com/file/d/1W2OnNY2jQD9koZSG2VH4wFZ160tCxQUN/view" className="hover:opacity-75 transition flex flex-col items-center">
            <DocumentTextIcon className="h-8 w-8 mb-4 text-purple-600" />
            <span className="text-xl font-mono">CV</span>
          </a>
        </div>
      </header>
      <main className="w-full relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/colours.png" 
            alt="Colorful Background" 
            fill 
            className="blur-[32px]" 
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectTile
              href="/data-engineering"
              icon={CircleStackIcon}
              title="Data Engineering"
              description="Scalable data pipelines and infrastructure"
              iconColor="text-purple-700"
            />
            <ProjectTile
              href="/software-engineering"
              icon={CogIcon}
              title="Software Engineering"
              description="Full-stack development"
              iconColor="text-red-700"
            />
            <ProjectTile
              href="/machine-learning"
              icon={CpuChipIcon}
              title="Machine Learning"
              description="ML and statistical model development and deployment"
              iconColor="text-red-700"
            />
            <ProjectTile
              href="/python-packages"
              icon={CodeBracketIcon}
              title="Python Packages"
              description="Open-source Python package contributions"
              iconColor="text-purple-700"
            />
          </div>
        </div>
      </main>
      <footer className="p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
        </div>
      </footer>
    </div>
  );
};

export default HomePage;