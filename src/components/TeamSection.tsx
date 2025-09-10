import React from 'react';
import Image from 'next/image';

function TeamSection() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50 text-center" aria-labelledby="team-heading">
        <div className="container mx-auto px-4 md:px-8">
          <h2 id="team-heading" className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image src="/avatar1.svg" alt="Team Member 1" width={96} height={96} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">Aarav Sharma</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">Team Lead & Backend Developer</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image src="/avatar2.svg" alt="Team Member 2" width={96} height={96} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">Priya Singh</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">Frontend Developer & UI/UX Designer</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image src="/avatar3.svg" alt="Team Member 3" width={96} height={96} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">Rahul Verma</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">AI/ML & Blockchain Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// ...existing code...

export default TeamSection;
