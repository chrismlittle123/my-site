import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowPathIcon, CogIcon, CubeIcon, DevicePhoneMobileIcon, DocumentTextIcon, LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <header className="flex flex-col items-center justify-center pt-20">
        <Image src="/images/me.jpeg" alt="My Photo" width={150} height={150} className="rounded-full mb-8" />
        <h1 className="text-4xl font-bold mb-8 text-white">Chris Little — Data Engineer</h1>

        <p className="text-lg mb-20">Welcome to my personal portfolio site.</p>
        <div className="grid grid-cols-3 gap-x-24 mb-24 w-full max-w-2xl mx-auto">
          <a href="https://linkedin.com" className="hover:text-blue-400 transition flex flex-col items-center">
            <LinkIcon className="h-8 w-8 mb-2 text-blue-500" />
            <span className="text-2xl font-mono text-white">LinkedIn</span>
          </a>
          <a href="https://github.com" className="hover:text-red-400 transition flex flex-col items-center">
            <CodeBracketIcon className="h-8 w-8 mb-2 text-red-500" />
            <span className="text-2xl font-mono text-white">GitHub</span>
          </a>
          <a href="/cv" className="hover:text-orange-400 transition flex flex-col items-center">
            <DocumentTextIcon className="h-8 w-8 mb-2 text-orange-500" />
            <span className="text-2xl font-mono text-white">CV</span>
          </a>
        </div>
      </header>
      <main className="w-full relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/colours.png" 
            alt="Colorful Background" 
            fill 
            className="blur-xl" 
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link href="/data-engineering" className="bg-gray-800/80 backdrop-blur-sm shadow-md p-4 rounded-lg hover:shadow-lg transition max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <ArrowPathIcon className="h-8 w-8 mb-2 text-white" />
              <h2 className="text-xl font-semibold text-white">Data Engineering</h2>
              <p className="text-center text-gray-300">Building scalable data pipelines and infrastructure</p>
            </Link>
            <Link href="/software-engineering" className="bg-gray-800/80 backdrop-blur-sm shadow-md p-4 rounded-lg hover:shadow-lg transition max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <CogIcon className="h-8 w-8 mb-2 text-white" />
              <h2 className="text-xl font-semibold text-white">Software Engineering</h2>
              <p className="text-center text-gray-300">Full-stack development and system architecture</p>
            </Link>
            <Link href="/machine-learning" className="bg-gray-800/80 backdrop-blur-sm shadow-md p-4 rounded-lg hover:shadow-lg transition max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <DevicePhoneMobileIcon className="h-8 w-8 mb-2 text-white" />
              <h2 className="text-xl font-semibold text-white">Machine Learning</h2>
              <p className="text-center text-gray-300">ML model development and deployment</p>
            </Link>
            <Link href="/python-packages" className="bg-gray-800/80 backdrop-blur-sm shadow-md p-4 rounded-lg hover:shadow-lg transition max-w-sm mx-auto w-full h-40 flex flex-col items-center justify-center">
              <CubeIcon className="h-8 w-8 mb-2 text-white" />
              <h2 className="text-xl font-semibold text-white">Python Packages</h2>
              <p className="text-center text-gray-300">Open-source Python library contributions</p>
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-black p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
        </div>
      </footer>
    </div>
  );
};

export default HomePage;