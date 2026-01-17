'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CorporateTravel: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-800 to-orange-900">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Corporate Travel</h1>
          <p className="text-xl text-gray-200">Professional travel solutions for businesses</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
                <span className="text-4xl">💼</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-orange-500">Corporate Excellence</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                We specialize in providing premium transportation solutions tailored to your business needs. Whether for executive travel or team outings, we deliver professionalism and reliability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">Executive fleet available</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">Corporate accounts and billing</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">Scheduled and on-demand service</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-orange-500 font-bold text-2xl">✓</span>
                  <span className="text-gray-200">Discreet and professional team</span>
                </li>
              </ul>
              <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all">
                Get Corporate Account
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateTravel;
