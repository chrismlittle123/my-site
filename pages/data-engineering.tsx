import React from 'react';
import NavBar from '../components/NavBar';

const DataEngineering: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Data Engineering</h1>
          <p className="text-lg text-gray-600">This is the Data Engineering page.</p>
        </div>
      </main>
    </div>
  );
};

export default DataEngineering; 