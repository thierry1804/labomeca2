import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import labomecaLogo from '../assets/labomeca.png';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src={labomecaLogo} alt="LabomecA" className="h-12" />
              <div className="ml-3">
                <h3 className="text-xl font-bold">LABOMECA</h3>
                <p className="text-sm text-gray-400">Building Power</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Fournisseur leader d'équipements industriels lourds pour les projets de construction, d'exploitation minière et d'infrastructure en France.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#F67122] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F67122] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F67122] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#F67122]">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Usinage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chaudronnerie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Flexibles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Groupe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Solaires</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#F67122]">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Location d'équipement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Réparations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fourniture de pièces</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#F67122]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={16} className="text-[#F67122] mr-3" />
                <span className="text-gray-400">(+261) 32 05 440 65</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-[#F67122] mr-3" />
                <span className="text-gray-400">contact@labomeca.fr</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-[#F67122] mr-3 mt-1" />
                <span className="text-gray-400">
                Lot 30 Andrefantsena Talatamaty<br />
                Antananarivo 101, Madagascar
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
              © 2025 Labomeca. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique des Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;