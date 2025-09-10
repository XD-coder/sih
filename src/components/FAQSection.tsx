import React from 'react';

const FAQSection: React.FC = () => (
  <section className="py-16 md:py-24 bg-gray-100" aria-labelledby="faq-heading">
    <div className="container mx-auto px-6">
      <h2 id="faq-heading" className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">How does the Digital ID work?</h3>
          <p className="text-gray-700">Your Digital ID is securely generated and stored using blockchain technology, making it tamper-proof and easily verifiable by authorities.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Can I use the app offline?</h3>
          <p className="text-gray-700">Yes! Offline mode provides cached maps, emergency tips, and smart routing even without an internet connection.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">What happens in an emergency?</h3>
          <p className="text-gray-700">The app triggers an alert, validates the report using AI, and notifies both authorities and your emergency contacts instantly.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Is my data safe?</h3>
          <p className="text-gray-700">We use end-to-end encryption and strict privacy policies to ensure your data is always protected.</p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
