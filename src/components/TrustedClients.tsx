import lp from '../assets/lp.jpg';
import colas from '../assets/colas.jpg';
import shopu from '../assets/shopu.jpg';
import star from '../assets/star.jpg';
import bgfi from '../assets/bgfi.jpg';
import total from '../assets/total.png';
import jovena from '../assets/jovena.jpg';
import tozzi from '../assets/tozzi.png';
import sbm from '../assets/sbm.jpg';
import shell from '../assets/shell.jpg';
import colbert from '../assets/colbert.jpg';
import satom from '../assets/satom.png';
import mcb from '../assets/mcb.jpg';

const TrustedClients = () => {
  const clients = [
    { name: 'LOGISTIQUE PETROLIERE', logo: lp },
    { name: 'COLAS', logo: colas },
    { name: 'SHOP U', logo: shopu },
    { name: 'STAR', logo: star },
    { name: 'BGFI BANK', logo: bgfi },
    { name: 'TOTAL', logo: total },
    { name: 'JOVENA', logo: jovena },
    { name: 'TOZZI GREEN', logo: tozzi },
    { name: 'BANQUE SBM MADAGASCAR', logo: sbm },
    { name: 'SHELL', logo: shell },
    { name: 'HOTEL COLBERT', logo: colbert },
    { name: 'SOGEA SATOM', logo: satom },
    { name: 'MCB', logo: mcb }
  ];

  return (
    <section className="bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row items-center gap-12 w-full">
          <div className="flex-shrink-0" style={{ minWidth: '320px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              NOS RÉFÉRENCES
            </h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>
          <div className="relative overflow-hidden w-full">
            <div className="carousel-track flex items-center gap-12 animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 rounded-lg"
                  style={{ minWidth: '120px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-24 h-24 object-contain opacity-80"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
                width: max-content;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;