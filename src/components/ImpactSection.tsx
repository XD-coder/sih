import React from 'react';
import Image from 'next/image';

const ImpactSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-blue-900 text-white" aria-labelledby="impact-heading">
    <div className="container mx-auto px-6 text-center">
      <h2 id="impact-heading" className="text-4xl md:text-5xl font-extrabold mb-12">
        Our Projected Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center">
          <p className="text-6xl md:text-8xl font-black mb-4 text-blue-400">90%</p>
          <p className="text-2xl font-bold mb-8">Reduction in missing tourist incidents</p>
          <p className="text-6xl md:text-8xl font-black mb-4 text-blue-400">2x</p>
          <p className="text-2xl font-bold">Faster emergency response</p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/impact-infographic.svg"
            alt="Infographic showing social, economic, environmental, and convenience benefits"
            width={400}
            height={400}
            className="w-full h-auto rounded-xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ImpactSection;
