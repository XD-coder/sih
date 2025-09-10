import React from 'react';

const SolutionPage: React.FC = () => (
  <main className="container mx-auto px-6 py-16">
    <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Solution</h1>
    <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
      <li>Secure all-in-one travel safety system</li>
      <li>Blockchain-based digital ID (QR-enabled) for instant verification</li>
      <li>Voice-activated SOS with cancel option</li>
      <li>Offline mode: Cached maps, safety tips, emergency routing</li>
      <li>Trip Digital Safe: Store documents safely</li>
      <li>Real-time alerts: Disaster, weather, traffic via SMS</li>
      <li>Incident reporting: ML-verified photos</li>
      <li>Group coordination: Lost-member alerts</li>
      <li>Battery guard: Notifies family/authorities during low power</li>
    </ul>
    <p className="text-lg text-gray-700 mb-4">
      Our system is designed to be robust, scalable, and user-friendly, ensuring tourists and authorities can respond quickly and effectively to any situation.
    </p>
  </main>
);

export default SolutionPage;
