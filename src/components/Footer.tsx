import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-orange-600 px-3 py-2 rounded">
                <span className="font-bold text-black text-xl">LM</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">LABOMECA</h3>
                <p className="text-sm text-gray-400">MACHINERY</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of heavy industrial equipment for construction, mining, and infrastructure projects across France.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Excavators</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bulldozers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cranes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Loaders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dump Trucks</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Equipment Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Repairs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parts Supply</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-500">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={16} className="text-orange-500 mr-3" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-orange-500 mr-3" />
                <span className="text-gray-400">contact@labomeca.fr</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-orange-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Rue de l'Industrie<br />
                  75000 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 LabomecA Machinery. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;