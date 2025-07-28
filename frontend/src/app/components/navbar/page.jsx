// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div>
          <Link href="/">
            <div className="text-white text-xl font-bold flex items-center space-x-2 cursor-pointer">
              {/* Replace 'logo.svg' with the path to your logo image */}
              <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
              Construction Site
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/services">
            <div className="text-white hover:text-gray-300 cursor-pointer">Services</div>
          </Link>
          <Link href="/portfolio">
            <div className="text-white hover:text-gray-300 cursor-pointer">Portfolio</div>
          </Link>
          <Link href="/contact">
            <div className="text-white hover:text-gray-300 cursor-pointer">Contact</div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-lg border border-gray-400 focus:outline-none focus:border-indigo-500"
          />
          <button className="ml-2 bg-gray-700 px-3 py-1 rounded-lg text-white hover:bg-gray-600">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
