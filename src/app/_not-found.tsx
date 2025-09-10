import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => (
  <main className="container mx-auto px-6 py-24 text-center">
    <h1 className="text-6xl font-extrabold text-blue-900 mb-6">404</h1>
    <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
    <Link href="/" className="inline-block px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
      Go to Home
    </Link>
  </main>
);

export default NotFoundPage;
