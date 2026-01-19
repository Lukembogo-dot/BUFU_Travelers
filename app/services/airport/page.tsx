'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AirportTransfers: React.FC = () => {
  return (
    /* Change 1: Added flex flex-col to ensure children can expand */
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Change 2: Wrapped sections in a main tag with flex-grow 
          This "pushes" the footer down to the bottom of the screen */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-orange-800 to-orange-900">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Airport Transfers</h1>
            <p className="text-xl text-gray-200">Reliable and timely airport pickups and drops</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/images/JKIA.jpg"
                  alt="JKIA Airport"
                  className="w-full h-[550px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
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
                <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all active:scale-95">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AirportTransfers;