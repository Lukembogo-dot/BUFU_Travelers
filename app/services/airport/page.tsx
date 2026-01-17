'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AirportTransfers: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-800 to-orange-900">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Airport Transfers</h1>
          <p className="text-xl text-gray-200">Reliable and timely airport pickups and drops</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-4xl">✈️</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-orange-500">Professional Airport Service</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Get to your destination with comfort and peace of mind. Our experienced drivers know all the routes to ensure you arrive on time, every time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">24/7 availability for all flights</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">Professional and courteous drivers</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">Clean and well-maintained vehicles</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">Competitive and transparent pricing</span>
                </li>
              </ul>
              <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AirportTransfers;
