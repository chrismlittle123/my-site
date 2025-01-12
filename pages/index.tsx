import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import { DatabaseIcon, CodeIcon, ChipIcon, CubeIcon } from '@heroicons/react/outline';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <header className="flex flex-col items-center justify-center pt-20">
        <Image src="/images/me.jpeg" alt="My Photo" width={150} height={150} className="rounded-full mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Hi, I’m [Your Name] — Engineer, Innovator, Creator.</h1>
        <p className="text-lg text-gray-600 mb-4">Bridging Data, Software, and Machine Learning to Create Solutions.</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Explore My Work</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">Get in Touch</button>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <DatabaseIcon className="h-12 w-12 text-blue-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Data Engineering</h2>
          <p className="text-center text-gray-600">This is the Data Engineering page.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <CodeIcon className="h-12 w-12 text-blue-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Software Engineering</h2>
          <p className="text-center text-gray-600">This is the Software Engineering page.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <ChipIcon className="h-12 w-12 text-blue-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Machine Learning</h2>
          <p className="text-center text-gray-600">This is the Machine Learning page.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
          <CubeIcon className="h-12 w-12 text-blue-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-center">Python Packages</h2>
          <p className="text-center text-gray-600">This is the Python Packages page.</p>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition">Twitter</a>
        </div>
        <a href="#" className="hover:text-blue-400 transition">Résumé</a>
        <p className="mt-2">© 2023 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage; 