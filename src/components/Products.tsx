import React from 'react';
import { ArrowRight } from 'lucide-react';
import groupe from '../assets/groupe-vente.jpg';

const Products = () => {
  const productCategories = [
    {
      title: 'Usinage',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Pelles mécaniques robustes pour les opérations de construction et d\'exploitation minière'
    },
    {
      title: 'Chaudronerie Mécano-soudure',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Bulldozers puissants pour le terrassement et la préparation des chantiers'
    },
    {
      title: 'Flexibles',
      image: 'https://images.pexels.com/photos/162568/cranes-construction-site-lifting-crane-162568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Grues mobiles et tours pour les applications de levage lourd'
    },
    {
      title: 'Groupes électrogènes',
      image: groupe,
      description: 'Chargeuses frontales et sur pneus pour la manutention de matériaux'
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="text-[#F67122]">services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez nos services industriels complets pour vos projets les plus exigeants : usinage de haute précision, chaudronnerie et mécano-soudure, réhabilitation de centrales hydroélectriques, fabrication sur mesure de flexibles hydrauliques, contrôle à distance de générateurs via GSM, et solutions solaires clé en main conformes aux normes européennes. De l'étude à la maintenance, nous vous accompagnons à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-[#F67122]"
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F67122] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <button className="text-[#F67122] hover:text-[#F67122]/90 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#F67122] hover:bg-[#F67122]/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Voir Tout l'Équipement
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;