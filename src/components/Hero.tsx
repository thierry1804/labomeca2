import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Heavy construction equipment"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            DISCOVER OUR HEAVY
            <br />
            <span className="text-orange-500">INDUSTRY EQUIPMENT</span>
            <br />
            FOR SALE & RENT
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            High-performance equipment for your project needs. Our inventory 
            includes top machinery for construction, mining, and more. Trust us for 
            precision and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105">
              <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
              View Products
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get quotes for free
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;