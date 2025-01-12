import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
              <a href="/" className="hover:text-gray-900 transition duration-150">
                Christopher Little
              </a>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/data-engineering" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Data Engineering</Link>
            <Link href="/software-engineering" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Software Engineering</Link>
            <Link href="/machine-learning" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Machine Learning</Link>
            <Link href="/python-packages" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Python Packages</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 