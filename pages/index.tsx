import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowPathIcon, CogIcon, CubeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <header className="flex flex-col items-center justify-center pt-20">
        <Image src="/images/me.jpeg" alt="My Photo" width={150} height={150} className="rounded-full mb-4" />
        <h1 className="text-4xl font-bold mb-2 text-white">Chris Little — Data/Software Engineer</h1>
        <p className="text-lg mb-4 text-gray-300">Based in Oxford, UK</p>
        <div className="flex space-x-4 text-gray-300">
          <a href="https://linkedin.com" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="https://github.com" className="hover:text-blue-400 transition">GitHub</a>
          <a href="/cv" className="hover:text-blue-400 transition">CV</a>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto relative">
        <Image src="/images/colours.jpg" alt="Colorful Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/data-engineering" className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
            <ArrowPathIcon className="h-8 w-8 mx-auto mb-2 text-white" />
            <h2 className="text-xl font-semibold text-center text-white">Data Engineering</h2>
            <p className="text-center text-gray-300">Building scalable data pipelines and infrastructure</p>
          </Link>
          <Link href="/software-engineering" className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
            <CogIcon className="h-8 w-8 mx-auto mb-2 text-white" />
            <h2 className="text-xl font-semibold text-center text-white">Software Engineering</h2>
            <p className="text-center text-gray-300">Full-stack development and system architecture</p>
          </Link>
          <Link href="/machine-learning" className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
            <DevicePhoneMobileIcon className="h-8 w-8 mx-auto mb-2 text-white" />
            <h2 className="text-xl font-semibold text-center text-white">Machine Learning</h2>
            <p className="text-center text-gray-300">ML model development and deployment</p>
          </Link>
          <Link href="/python-packages" className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
            <CubeIcon className="h-8 w-8 mx-auto mb-2 text-white" />
            <h2 className="text-xl font-semibold text-center text-white">Python Packages</h2>
            <p className="text-center text-gray-300">Open-source Python library contributions</p>
          </Link>
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