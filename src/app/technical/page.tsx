import React from 'react';

const TechnicalPage: React.FC = () => (
  <main className="container mx-auto px-6 py-16">
    <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Technical Approach</h1>
    <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
      <li>Modular architecture for flexibility and scalability</li>
      <li>Edge computing for IoT integration & offline support</li>
      <li>Local caching + delayed sync without internet</li>
      <li>Continuous AI/CV model training for accuracy</li>
      <li>Strong encryption + secure data handling</li>
      <li>Microservices for scalability</li>
    </ul>
    <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Feasibility & Viability</h2>
    <p className="text-lg text-gray-700 mb-2"><strong>Challenges:</strong> Complexity of integrating blockchain, AI, IoT; delayed real-time updates in disasters; limited internet access; accuracy issues (CV, anomaly detection, NLP); privacy & regulatory concerns.</p>
    <p className="text-lg text-gray-700 mb-2"><strong>Solutions:</strong> Modular + edge computing; caching & delayed sync; continuous model validation; encryption & secure practices; scalable microservices.</p>
    <p className="text-lg text-gray-700 mb-4">Verdict: Technically feasible & highly viable with existing tech.</p>
  </main>
);

export default TechnicalPage;
