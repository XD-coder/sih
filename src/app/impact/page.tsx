import React from 'react';

const ImpactPage: React.FC = () => (
  <main className="container mx-auto px-6 py-16">
    <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Impact & Benefits</h1>
    <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Impact on Tourists</h2>
    <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
      <li>Real-time location updates for family</li>
      <li>Quick emergency response with SOS + health tracking</li>
      <li>Awareness of hazards (disaster, traffic, weather)</li>
      <li>Smart travel recommendations</li>
    </ul>
    <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Benefits</h2>
    <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
      <li><strong>Social:</strong> Better safety & connectivity</li>
      <li><strong>Economic:</strong> Reduces losses & promotes safer tourism</li>
      <li><strong>Environmental:</strong> Encourages eco-friendly travel</li>
      <li><strong>Convenience:</strong> Offline maps & itinerary management</li>
    </ul>
  </main>
);

export default ImpactPage;
