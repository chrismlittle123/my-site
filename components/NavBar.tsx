import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="backdrop-blur-xl">
      <div className="container mx-auto px-6 py-3">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">
              <a href="/" className="transition duration-150">
                Christopher Little
              </a>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Link href="/" className="px-3 py-2 mb-2 rounded-md text-m font-medium">Home</Link>
            <Link href="/data-engineering" className="px-3 py-2 mb-2 rounded-md text-m font-medium">Data Engineering</Link>
            <Link href="/software-engineering" className="px-3 py-2 mb-2 rounded-md text-m font-medium">Software Engineering</Link>
            <Link href="/machine-learning" className="px-3 py-2 mb-2 rounded-md text-m font-medium">Machine Learning</Link>
            <Link href="/python-packages" className="px-3 py-2 mb-2 rounded-md text-m font-medium">Python Packages</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 