import React from 'react';

const CTASection: React.FC = () => (
  <section className="py-16 md:py-24 bg-blue-600 text-white text-center" aria-labelledby="cta-heading">
    <div className="container mx-auto px-6">
      <h2 id="cta-heading" className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        Don&apos;t just travel, travel safe.
      </h2>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
        <a href="#" className="inline-block px-8 py-4 bg-white text-blue-600 text-xl font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
          Download Now
        </a>
        <a href="#" className="inline-block px-8 py-4 bg-transparent text-white text-xl font-bold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105">
          Join as Authority / Guide
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
