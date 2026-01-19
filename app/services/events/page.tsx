'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EventTransportation: React.FC = () => {
  return (
    /* The Fix: flex flex-col and min-h-screen work together to fill the window */
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Wrapping content in a 'main' tag with 'flex-grow' pushes the footer down */}
      <main className="flex-grow flex flex-col">
        
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-orange-800 to-orange-900 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Event Transportation</h1>
            <p className="text-xl md:text-2xl text-orange-100/80 font-light">
              Seamless transport for events and gatherings
            </p>
          </div>
        </section>

        {/* Content Section - flex-grow here ensures the black space is utilized */}
        <section className="flex-grow flex items-center py-20 lg:py-32 bg-black">
          <div className="max-w-6xl mx-auto px-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Image Container with "Breath" (Border and Shadow) */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  /* Path updated based on your public folder screenshot */
                  src="/images/event2.jpg"
                  alt="Event Transportation"
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={600}
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-orange-500">Event Solutions</h2>
                  <div className="h-1.5 w-24 bg-orange-600 rounded-full"></div>
                </div>

                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                  Make your events memorable with our specialized transportation services. From weddings to high-profile corporate gatherings, we ensure your guests arrive in style, safety, and absolute comfort.
                </p>

                <ul className="space-y-5">
                  {[
                    "Fleet tailored to event size & style",
                    "Coordinated multi-vehicle logistics",
                    "Flexible scheduling and custom routing",
                    "Professional appearance and chauffeur service"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 group">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all">
                        ✓
                      </span>
                      <span className="text-gray-200 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-orange-900/20">
                  Plan Your Event
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

export default EventTransportation;