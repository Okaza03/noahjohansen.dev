import React from 'react';

const clients = [
  { name: 'Client One', logo: '/images/clientlogos/scandifos.png' },
  { name: 'Client Two', logo: '/images/client2.png' },
  { name: 'Client Three', logo: '/images/client3.png' },
  { name: 'Client Four', logo: '/images/client4.png' },
];

const ClientLogos: React.FC = () => {
  return (
    <section className="text-center py-12 ">
      <h2 className="text-4xl font-bold mb-8">Trusted by</h2>
      <div className="flex justify-center items-center flex-wrap">
        {clients.map((client, index) => (
          <div key={index} className="m-4 p-4 bg-gray-900 shadow-lg rounded-lg">
            <img src={client.logo} alt={client.name} className="w-32 h-32 object-contain mx-auto hover:opacity-75 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
