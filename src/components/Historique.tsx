import React from 'react';
import LabomecaTimeline from './LabomecaTimeline';
import ceo from '../assets/ceo.webp';
import usinageH from '../assets/atelier.jpg';
import chaudronnerieH from '../assets/usinage-conventionnel.jpg';
import equipeH from '../assets/hero-bg.jpg';
import controleH from '../assets/groupe-distance.jpg';

const timelineData = [
  {
    date: '2002',
    title: 'Création de l\'atelier LABOMECA',
    description: 'Patrick Labouesse fonde un atelier d\'usinage à Antananarivo après 10 ans d\'expérience à l\'EMBL Heidelberg en Allemagne.',
    image: usinageH
  },
  {
    date: '2002-2010',
    title: 'Expertise technique en usinage',
    description: 'Utilisation des connaissances en matières premières, traitement thermique et micromécanique au service de l\'industrie malgache.',
    image: chaudronnerieH
  },
  {
    date: '2010-2020',
    title: 'Équipe nationale & développement',
    description: 'Formation d\'une équipe malgache passionnée pour assurer le service après-vente et la maintenance industrielle.',
    image: equipeH
  },
  {
    date: 'Depuis 2020',
    title: 'Innovation & contrôle à distance',
    description: 'Mise en place de solutions de surveillance à distance des groupes électrogènes, réduisant les risques et coûts pour les clients.',
    image: controleH
  }
];

const Historique: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Notre <span className="text-[#F67122]">histoire</span></h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch min-h-0">
          <div className="relative overflow-hidden h-full">
            <img
              src={ceo}
              alt="CEO"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="space-y-6 h-full min-h-0">
            <p className="text-lg leading-relaxed">
              <strong className="text-[#F67122]">Patrick Labouesse</strong>, fondateur de Labomeca, a implanté en 2002 à Antananarivo un atelier d'usinage de haute précision. Spécialisé dans le tournage, le fraisage et la rectification, cet atelier est le fruit d'une expertise technique approfondie acquise durant dix années d'expérience au sein du prestigieux laboratoire EMBL (European Molecular Biology Laboratory) de Heidelberg, en Allemagne. Là, il assurait la fabrication et l'entretien des composants micromécaniques essentiels aux recherches en biologie moléculaire de pointe.
            </p>
            <p className="text-lg leading-relaxed">
              Fort de cette expérience internationale, Patrick Labouesse a su transposer son savoir-faire en milieu industriel malgache. Il maîtrise les propriétés des matières premières, les traitements thermiques ainsi que leur adaptation aux contraintes spécifiques de chaque projet, ce qui lui a permis de concevoir et de produire une gamme d'équipements multifonctions, reconnus pour leur robustesse, leur précision et leur fiabilité. Ces équipements répondent aux besoins variés des secteurs industriels locaux, allant de la mécanique générale à la maintenance de systèmes complexes.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[#F67122]">Labomeca, c'est aussi une équipe de cadres et techniciens nationaux passionnés</strong>, soigneusement formés au fil des années, qui partagent la même exigence de qualité et d'innovation. Ensemble, ils assurent un service après-vente réactif et rigoureux, ainsi que la maintenance complète des équipements installés chez leurs clients.
            </p>
            <p className="text-lg leading-relaxed">
              Pionnière dans l'intégration de nouvelles technologies, la société a récemment mis en place un système de <strong className="text-[#F67122]">contrôle à distance des groupes électrogènes</strong>, permettant de détecter en amont d'éventuelles anomalies. Cette innovation contribue à éviter des pannes coûteuses et à réduire considérablement les frais d'entretien, tout en assurant une continuité de service optimale pour les installations critiques.
            </p>
          </div>
        </div>
        {/* Bloc timeline en dehors de la grille, largeur totale */}
        <div className="w-full bg-[#F67122] py-12 mt-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#000]">Timeline</h2>
          <div className="px-4">
            <LabomecaTimeline entries={timelineData} />
          </div>
        </div>
      </div>
      {/* CTA flottant en bas à droite */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-[#F67122] hover:bg-[#F67122]/90 text-white px-6 py-4 rounded-full shadow-lg font-bold text-lg transition-all duration-300 animate-bounce"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)' }}
        onClick={() => window.location.href = '/contact'}
      >
        Obtenir un devis gratuit
      </button>
    </div>
  );
};

export default Historique; 