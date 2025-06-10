import React from 'react';
import { Wrench, Truck, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-[#F67122]" />,
      title: 'Maintenance & Réparation',
      description: 'Services experts de maintenance et de réparation pour maintenir votre équipement à des performances optimales.'
    },
    {
      icon: <Truck className="w-12 h-12 text-[#F67122]" />,
      title: 'Location d\'équipement',
      description: 'Options de location flexibles pour projets à court et long terme avec des tarifs compétitifs.'
    },
    {
      icon: <Shield className="w-12 h-12 text-[#F67122]" />,
      title: 'Garantie & Support',
      description: 'Couverture de garantie complète et support technique 24/7 pour tous les équipements.'
    },
    {
      icon: <Clock className="w-12 h-12 text-[#F67122]" />,
      title: 'Service d\'urgence',
      description: 'Services de réparation d\'urgence 24h/24 pour minimiser les temps d\'arrêt sur les projets critiques.'
    }
  ];

  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="text-[#F67122]">prestations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solutions complètes pour tous vos besoins en équipement lourd, de la vente et location à la maintenance et au support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black hover:bg-gray-900 p-8 rounded-xl transition-all duration-300 border border-gray-800 hover:border-[#F67122]"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#F67122] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;