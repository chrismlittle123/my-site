import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Menu</div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <Link href="/data-engineering">Data Engineering</Link>
            </li>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <Link href="/software-engineering">Software Engineering</Link>
            </li>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <Link href="/machine-learning">Machine Learning</Link>
            </li>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <Link href="/python-packages">Python Packages</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello World</h1>
          <p className="text-lg text-gray-600">Welcome to our amazing landing page!</p>
        </div>
      </main>
    </div>
  );
};

export default HomePage; 