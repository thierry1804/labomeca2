import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <Link to="/">
              <img src={labomecaLogo} alt="LabomecA" className="h-12" />
            </Link>
            <div className="ml-3 hidden md:block">
              <h1 className="text-xl font-bold text-[#F67122]">LABOMECA</h1>
              <p className="text-sm text-gray-400">Building Power</p>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#F67122] transition-colors font-medium">
              Accueil
            </Link>
            <Link to="/historique" className="text-white hover:text-[#F67122] transition-colors font-medium">
              Historique
            </Link>
            <div className="group relative">
              <button className="text-white hover:text-[#F67122] transition-colors font-medium flex items-center focus:outline-none">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity z-50">
                <ul className="py-2">
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Usinage</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Chaudronnerie</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Flexibles</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Groupes électrogènes</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Solaires</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Location d'équipement</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Maintenance</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Réparations</a></li>
                  <li><a href="#" className="block px-6 py-2 text-white hover:text-[#F67122] transition-colors">Fourniture de pièces</a></li>
                </ul>
              </div>
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
              <Link to="/" className="text-white hover:text-[#F67122] transition-colors font-medium">
                Accueil
              </Link>
              <Link to="/historique" className="text-white hover:text-[#F67122] transition-colors font-medium">
                Historique
              </Link>
              <div>
                <span className="block text-white font-medium mb-2">Services</span>
                <ul className="pl-4 space-y-1">
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Usinage</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Chaudronnerie</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Flexibles</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Groupes électrogènes</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Solaires</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Location d'équipement</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Maintenance</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Réparations</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-[#F67122] transition-colors">Fourniture de pièces</a></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;