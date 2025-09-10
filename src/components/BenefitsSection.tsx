import React from 'react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection: React.FC<{ benefits: Benefit[] }> = ({ benefits }) => (
  <>
    <section className="py-16 md:py-24 bg-white" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4 md:px-8">
        <h2 id="benefits-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16 tracking-tight">
          Who Benefits?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">{benefit.title}</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default BenefitsSection;
