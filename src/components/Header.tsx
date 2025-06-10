import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Globe } from 'lucide-react';
import labomecaLogo from '../assets/labomeca.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={labomecaLogo} alt="LabomecA" className="h-12" />
            <div className="ml-3 hidden md:block">
              <h1 className="text-xl font-bold text-[#F67122]">LABOMECA</h1>
              <p className="text-sm text-gray-400">Building Power</p>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-[#F67122] transition-colors font-medium">
              Accueil
            </a>
            <a href="#about" className="text-white hover:text-[#F67122] transition-colors font-medium">
              Historique
            </a>
            <div className="group relative">
              <a href="#services" className="text-white hover:text-[#F67122] transition-colors font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
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
              <a href="#home" className="text-white hover:text-[#F67122] transition-colors font-medium">
                Accueil
              </a>
              <a href="#about" className="text-white hover:text-[#F67122] transition-colors font-medium">
                Historique
              </a>
              <a href="#services" className="text-white hover:text-[#F67122] transition-colors font-medium">
                Services
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;