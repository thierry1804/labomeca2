import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      {/* Top bar */}
      <div className="bg-gray-900 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Construction Equipment</span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 bg-black hover:bg-gray-800 px-4 py-2 rounded transition-colors">
              <span>Contact us</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
              <MapPin size={16} />
              <span>Find a dealer</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-orange-500 transition-colors">
              <Globe size={16} />
              <span>France</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-orange-600 px-3 py-2 rounded">
              <span className="font-bold text-black text-xl">LM</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold">LABOMECA</h1>
              <p className="text-sm text-gray-400">MACHINERY</p>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-orange-500 transition-colors font-medium">
              Home
            </a>
            <div className="group relative">
              <a href="#products" className="text-white hover:text-orange-500 transition-colors font-medium flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#rentals" className="text-white hover:text-orange-500 transition-colors font-medium">
              Rentals
            </a>
            <div className="group relative">
              <a href="#services" className="text-white hover:text-orange-500 transition-colors font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#about" className="text-white hover:text-orange-500 transition-colors font-medium">
              About us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-orange-500 transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="text-white hover:text-orange-500 transition-colors font-medium">
                Products
              </a>
              <a href="#rentals" className="text-white hover:text-orange-500 transition-colors font-medium">
                Rentals
              </a>
              <a href="#services" className="text-white hover:text-orange-500 transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-white hover:text-orange-500 transition-colors font-medium">
                About us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;