import React from 'react';

const TrustedClients = () => {
  const clients = [
    { name: 'EIFFAGE CONSTRUCTION', logo: 'EIFFAGE' },
    { name: 'OLTMANS CONSTRUCTION CO.', logo: 'Oltmans' },
    { name: 'KNK CONSTRUCTION', logo: 'KNK' },
    { name: 'OCTANORM', logo: 'OCTANORM' },
    { name: 'HYUNDAI', logo: 'HYUNDAI' }
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              TRUSTED CLIENTS
            </h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4 rounded-lg hover:bg-gray-900 transition-all duration-300"
              >
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  <div className="text-lg font-semibold tracking-wider">
                    {client.logo}
                  </div>
                  {client.name !== client.logo && (
                    <div className="text-xs text-gray-500 mt-1">
                      {client.name.replace(client.logo, '').trim()}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;