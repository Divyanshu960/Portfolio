'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Divyanshu
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-black hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-black hover:text-blue-600">About</Link>
          <Link href="/projects" className="text-black hover:text-blue-600">Projects</Link>
          <Link href="/experience" className="text-black hover:text-blue-600">Experience</Link>
          <Link href="/skills" className="text-black hover:text-blue-600">Skills</Link>
          <Link href="/contact" className="text-black hover:text-blue-600">Contact</Link>
        </div>

        {/* Toggle button for mobile */}
        <button
          className="md:hidden p-2 text-black hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
      >
        <div className="px-4 pb-4 space-y-2">
          <Link href="/" className="block text-black hover:text-blue-600">Home</Link>
          <Link href="/about" className="block text-black hover:text-blue-600">About</Link>
          <Link href="/projects" className="block text-black hover:text-blue-600">Projects</Link>
          <Link href="/experience" className="block text-black hover:text-blue-600">Experience</Link>
          <Link href="/skills" className="block text-black hover:text-blue-600">Skills</Link>
          <Link href="/contact" className="block text-black hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;