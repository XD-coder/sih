import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: React.FC<{ features: Feature[] }> = ({ features }) => (
  <section className="py-16 md:py-24 bg-white" aria-labelledby="features-heading">
    <div className="container mx-auto px-6">
      <h2 id="features-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 mx-auto">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-center text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
