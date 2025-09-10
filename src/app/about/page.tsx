import React from 'react';

const AboutPage: React.FC = () => (
  <main className="container mx-auto px-6 py-16">
    <h1 className="text-4xl font-extrabold text-blue-900 mb-6">About Us</h1>
    <p className="text-lg text-gray-700 mb-4">
      <strong>Team:</strong> Toofani Developers<br/>
      <strong>Hackathon:</strong> Smart India Hackathon 2025<br/>
      <strong>Problem Statement ID:</strong> 25002<br/>
      <strong>Theme:</strong> Travel & Tourism<br/>
      <strong>Category:</strong> Software
    </p>
    <p className="text-lg text-gray-700 mb-4">
      We are a passionate team of developers, designers, and innovators dedicated to making travel safer and smarter for everyone. Our project, the Smart Tourist Safety Monitoring & Incident Response System, leverages cutting-edge technologies like AI, Geo-Fencing, and Blockchain to protect tourists and empower authorities.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Our mission is to create a secure, connected, and convenient travel experience for all, reducing risks and promoting safe tourism across India and beyond.
    </p>
  </main>
);

export default AboutPage;
