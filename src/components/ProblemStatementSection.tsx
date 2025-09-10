import React from 'react';
import Image from 'next/image';

const ProblemStatementSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-blue-50 text-center" aria-labelledby="problem-statement-heading">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <h2 id="problem-statement-heading" className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
          The Challenge for Today&apos;s Travelers
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          &quot;Every year, thousands of tourists face emergencies due to a lack of quick help, missing companions, or lost identification. Our system solves these problems with cutting-edge technology.&quot;
        </p>
      </div>
      <div className="flex flex-wrap items-start justify-center text-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500">
            <Image src="/lost-id.svg" alt="Lost ID icon" className="mx-auto mb-4" width={100} height={100} loading="lazy" />
            <h3 className="text-xl font-bold text-gray-800">Lost ID</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
            <Image src="/no-network.svg" alt="Network dead zones icon" className="mx-auto mb-4" width={100} height={100} loading="lazy" />
            <h3 className="text-xl font-bold text-gray-800">No Network</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
            <Image src="/health-emergency.svg" alt="Health emergency icon" className="mx-auto mb-4" width={100} height={100} loading="lazy" />
            <h3 className="text-xl font-bold text-gray-800">Health Emergency</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <Image src="/delayed-help.svg" alt="Late emergency response icon" className="mx-auto mb-4" width={100} height={100} loading="lazy" />
            <h3 className="text-xl font-bold text-gray-800">Delayed Help</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemStatementSection;
