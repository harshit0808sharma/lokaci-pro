'use client'; // If you're using Next.js app router

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">Lokaci</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500 transition">About</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
          <a href="#" className="hover:text-blue-500 transition">Our Services</a>
          <a href="#" className="hover:text-blue-500 transition">More</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-yellow-500 focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Our Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">More</a>
        </div>
      )}
    </header>
  );
};

export default Header;
