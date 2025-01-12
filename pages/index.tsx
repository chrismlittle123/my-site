import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600">Explore my work and projects across various domains.</p>
      </div>
    </div>
  );
};

export default HomePage; 