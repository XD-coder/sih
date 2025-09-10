import React from 'react';

const TestimonialsSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="testimonials-heading">
    <div className="container mx-auto px-6">
      <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <p className="text-xl italic text-gray-700 mb-4">
            &quot;Even without network, my SOS reached the nearest help center. This app is a lifesaver for adventurers!&quot;
          </p>
          <p className="text-lg font-bold text-gray-800">- Jane Doe, Trekker</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <p className="text-xl italic text-gray-700 mb-4">
            &quot;We knew exactly where our daughter was during her trip, and that gave us complete peace of mind. Highly recommend!&quot;
          </p>
          <p className="text-lg font-bold text-gray-800">- The Smith Family</p>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
