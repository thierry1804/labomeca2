import React from 'react';
import { Wrench, Truck, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-orange-500" />,
      title: 'Maintenance & Repair',
      description: 'Expert maintenance and repair services to keep your equipment running at peak performance.'
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: 'Equipment Rental',
      description: 'Flexible rental options for short-term and long-term projects with competitive rates.'
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: 'Warranty & Support',
      description: 'Comprehensive warranty coverage and 24/7 technical support for all equipment.'
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: 'Emergency Service',
      description: 'Round-the-clock emergency repair services to minimize downtime on critical projects.'
    }
  ];

  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for all your heavy equipment needs, from sales and rentals to maintenance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black hover:bg-gray-900 p-8 rounded-xl transition-all duration-300 border border-gray-800 hover:border-orange-500"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
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