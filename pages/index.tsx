import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import { DocumentTextIcon, LinkIcon, CodeBracketIcon, CpuChipIcon, CogIcon, CircleStackIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <header className="flex flex-col items-center justify-center pt-20">
        <Image src="/images/me.jpeg" alt="My Photo" width={150} height={150} className="rounded-full mb-8" />
        <h1 className="text-4xl font-bold mb-8">Christopher Little — Data Engineer</h1>

        <p className="text-lg mb-14">Welcome to my personal portfolio site.</p>
        <div className="grid grid-cols-3 gap-x-24 mb-24 w-full max-w-2xl mx-auto">
          <a href="https://linkedin.com" className="hover:opacity-75 transition flex flex-col items-center">
            <LinkIcon className="h-8 w-8 mb-4 text-blue-600" />
            <span className="text-xl font-mono">LinkedIn</span>
          </a>
          <a href="https://github.com" className="hover:opacity-75 transition flex flex-col items-center">
            <CodeBracketIcon className="h-8 w-8 mb-4 text-red-600" />
            <span className="text-xl font-mono">GitHub</span>
          </a>
          <a href="/cv" className="hover:opacity-75 transition flex flex-col items-center">
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
            <Link href="/data-engineering" className="bg-black shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <CircleStackIcon className="h-8 w-8 mb-2 text-purple-700" />
              <h2 className="text-xl font-semibold mb-2 text-blue-200">Data Engineering</h2>
              <p className="text-center">Scalable data pipelines and infrastructure</p>
            </Link>
            <Link href="/software-engineering" className="bg-black shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <CogIcon className="h-8 w-8 mb-2 text-purple-700" />
              <h2 className="text-xl font-semibold mb-2 text-blue-200">Software Engineering</h2>
              <p className="text-center">Full-stack development</p>
            </Link>
            <Link href="/machine-learning" className="bg-black shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <CpuChipIcon className="h-8 w-8 mb-2 text-purple-700" />
              <h2 className="text-xl font-semibold mb-2 text-blue-200">Machine Learning</h2>
              <p className="text-center">ML model development and GenAI</p>
            </Link>
            <Link href="/python-packages" className="bg-black shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <CodeBracketIcon className="h-8 w-8 mb-2 text-purple-700" />
              <h2 className="text-xl font-semibold mb-2 text-blue-200">Python Packages</h2>
              <p className="text-center">Open-source Python library contributions</p>
            </Link>
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