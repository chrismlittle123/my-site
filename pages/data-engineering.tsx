import React from 'react';
import NavBar from '../components/NavBar';

const DataEngineering: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold">Data Engineering</h1>
        <p className="text-lg">This is the Data Engineering page.</p>
      </div>
    </div>
  );
};

export default DataEngineering;