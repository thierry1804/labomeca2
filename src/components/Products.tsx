import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      title: 'Excavators',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Heavy-duty excavators for construction and mining operations'
    },
    {
      title: 'Bulldozers',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Powerful bulldozers for earthmoving and site preparation'
    },
    {
      title: 'Cranes',
      image: 'https://images.pexels.com/photos/162568/cranes-construction-site-lifting-crane-162568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Mobile and tower cranes for heavy lifting applications'
    },
    {
      title: 'Loaders',
      image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Front-end loaders and wheel loaders for material handling'
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Equipment</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of heavy machinery designed for construction, mining, and industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-orange-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <button className="text-orange-500 hover:text-orange-400 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Equipment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;