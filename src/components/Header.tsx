"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">APA Citation</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link href="/tutorials" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-indigo-600">
                Tutorials
              </Link>
              <Link href="/about" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-indigo-600">
                About
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* 汉堡菜单图标 */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">
              Home
            </Link>
            <Link href="/tutorials" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">
              Tutorials
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 