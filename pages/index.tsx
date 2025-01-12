import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import { ArrowPathIcon, CogIcon, CubeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <header className="flex flex-col items-center justify-center pt-20">
        <Image src="/images/me.jpeg" alt="My Photo" width={150} height={150} className="rounded-full mb-4" />
        <h1 className="text-4xl font-bold mb-2">Chris Little — Data/Software Engineer</h1>
        <p className="text-lg mb-4">Based in Oxford, UK</p>
        <div className="flex space-x-4">
          <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition">Get in Touch</button>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <ArrowPathIcon className="h-8 w-8 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Data Engineering</h2>
          <p className="text-center">This is the Data Engineering page.</p>
        </div>
        <div className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <CogIcon className="h-8 w-8 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Software Engineering</h2>
          <p className="text-center">This is the Software Engineering page.</p>
        </div>
        <div className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <DevicePhoneMobileIcon className="h-8 w-8 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Machine Learning</h2>
          <p className="text-center">This is the Machine Learning page.</p>
        </div>
        <div className="bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <CubeIcon className="h-8 w-8 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Python Packages</h2>
          <p className="text-center">This is the Python Packages page.</p>
        </div>
      </main>
      <footer className="bg-black p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition">CV</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 