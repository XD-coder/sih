import React from 'react';

const InnovationPage: React.FC = () => (
  <main className="container mx-auto px-6 py-16">
    <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Innovation & Uniqueness</h1>
    <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
      <li><strong>QR Code IDs:</strong> Secure, tamper-proof digital identification</li>
      <li><strong>Group Safety Alerts:</strong> Notify if a group member is missing</li>
      <li><strong>Smart Watch Integration:</strong> Health & location monitoring</li>
      <li><strong>AI Image Verification:</strong> Validate incident photos before escalation</li>
      <li><strong>Role-based Access & Masked ID:</strong> QR-based verification with minimal detail exposure</li>
      <li><strong>Peer-to-Peer SOS:</strong> SOS hops via Bluetooth until network is found, sending live location & user ID</li>
    </ul>
    <p className="text-lg text-gray-700 mb-4">
      Our solution stands out for its modular architecture, seamless integration of AI, IoT, and blockchain, and a strong focus on privacy, security, and real-world usability.
    </p>
  </main>
);

export default InnovationPage;
