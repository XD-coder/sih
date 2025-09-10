import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden bg-white py-12 md:py-24 text-center" id="main-content" role="main">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight mb-4">
            Smart Tourist Safety, Anytime, Anywhere.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            An AI, Blockchain & IoT powered solution for real-time tourist protection.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a href="#" className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Download App
            </a>
            <a href="#" className="inline-block px-8 py-3 bg-white text-blue-600 text-lg font-bold rounded-full border-2 border-blue-600 shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              See How It Works
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero-illustration.svg"
            alt="Custom SVG illustration of travelers with a smart ID and SOS button"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
