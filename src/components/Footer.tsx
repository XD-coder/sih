import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12" role="contentinfo">
    <div className="container mx-auto px-6 text-center">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            {/* SVG icon here */}
          </a>
          <a href="#" aria-label="Twitter">
            {/* SVG icon here */}
          </a>
          <a href="#" aria-label="LinkedIn">
            {/* SVG icon here */}
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4 sm:mt-0">© 2025 SIH Branding</p>
      </div>
    </div>
  </footer>
);

export default Footer;
