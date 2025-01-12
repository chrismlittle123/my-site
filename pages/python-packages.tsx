import React from 'react';
import NavBar from '../components/NavBar';

const PythonPackages: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold text-gray-800">Python Packages</h1>
        <p className="text-lg text-gray-600">This is the Python Packages page.</p>
      </div>
    </div>
  );
};

export default PythonPackages;