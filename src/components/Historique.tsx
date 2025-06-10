import React from 'react';

const Historique: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Notre <span className="text-[#F67122]">histoire</span></h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            <strong className="text-[#F67122]">Patrick Labouesse</strong>, fondateur de Labomeca a créé en 2002 à Antananarivo, son atelier d'usinage, c'est-à-dire de tournage, de fraisage et de rectification, en apportant ses connaissances et son savoir-faire acquis pendant 10 années à Heidelberg Allemagne dans le laboratoire EMBL de biologie moléculaire où il assurait la partie micromécanique.
          </p>
          <p className="text-lg leading-relaxed">
            Cette expérience professionnelle à la fois de l'acquisition de la connaissance des matières premières, du traitement thermique et leur application lui a permis de mettre en œuvre une gamme multifonction d'une grande qualité au service de l'industrie malgache.
          </p>
          <p className="text-lg leading-relaxed">
            Avec son équipe de cadres nationaux passionnés dont elle a su s'entourer au fil du temps, la société Labomeca prend en charge le service après-vente et la maintenance des matériels de ses clients en innovant notamment dans la mise en place du contrôle à distance de vos groupes électrogènes, prévenant ainsi d'imprévisibles dommages et réduisant de ce fait les coûts d'entretien de vos installations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historique; 