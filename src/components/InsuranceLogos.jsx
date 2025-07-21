import React from 'react';

const InsuranceLogos = () => {
  const insurancePartners = [
    { name: 'Bupa', image: 'bupa.webp' },
    { name: 'AXA Health', image: 'axa.webp' },
    { name: 'Aviva', image: 'aviva.webp' },
    { name: 'Vitality', image: 'vitality-health.webp' },
    { name: 'Simply Health', image: 'simply-health.webp' },
    { name: 'WPA', image: 'wpa.webp' },
    { name: 'Healix Health Services', image: 'healix.webp' },
    { name: 'Cigna', image: 'cigna.webp' },
  ];

  return (
    <div className="bg-[#F5EFEB] py-16">
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-[#567C8D] mb-4">
            Insurance Partners
          </h3>
          <p className="text-[#567C8D] max-w-xl mx-auto">
            We work with leading insurance providers to ensure you receive the care you need.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 justify-items-center">
          {insurancePartners.map((partner, index) => (
            <div
              key={index}
              className="w-40 h-40 flex flex-col justify-center items-center p-4 bg-[#F5EFEB] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-shadow duration-300"
            >
              <img
                src={`/${partner.image}`}
                alt={`${partner.name} logo`}
                className="h-12 w-auto mb-3 object-contain"
              />
              <span className="text-sm font-medium text-gray-700 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceLogos;
