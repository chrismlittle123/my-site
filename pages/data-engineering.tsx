import React from 'react';
import NavBar from '../components/NavBar';

const DataEngineering: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold text-gray-800">Data Engineering</h1>
        <p className="text-lg text-gray-600">This is the Data Engineering page.</p>
      </div>
    </div>
  );
};

export default DataEngineering;