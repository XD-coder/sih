import React from 'react';
import Image from 'next/image';

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  visual: string;
}

const HowItWorksSection: React.FC<{ steps: HowItWorksStep[] }> = ({ steps }) => (
  <section className="py-16 md:py-24 bg-blue-50" aria-labelledby="how-it-works-heading">
    <div className="container mx-auto px-6">
      <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16">
        How It Works
      </h2>
      <div className="flex flex-col space-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center space-y-8 md:space-y-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={`https://placehold.co/500x300/60A5FA/FFFFFF?text=${encodeURIComponent(step.title)}`}
                alt={step.title}
                width={500}
                height={300}
                className="rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 md:p-8 text-center md:text-left">
              <span className="text-blue-600 font-bold text-lg mb-2 inline-block">
                {step.step}
              </span>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-lg text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
