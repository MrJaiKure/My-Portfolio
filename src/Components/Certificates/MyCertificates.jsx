import React from 'react';
import MyCertificatesData from './MyCertificatesData';

const MyCertificates = () => {
  return (
    <div className="my-certificates-section py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        This is My Certificates Section
      </h1>
      <div className="mywork-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MyCertificatesData.map((certificate, index) => (
          <div
            key={index}
            className="certificate-card p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={certificate.w_img}
              alt={certificate.w_name}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-semibold text-center mt-4">
              {certificate.w_name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCertificates;
