'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a2421] text-white flex flex-col">

      {/* 1. Hero Section - Wavy Title */}
      <section className="relative h-64 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
            <path 
              fill="#92400e" 
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
            <path 
              fill="#f59e0b" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              className="opacity-80"
            ></path>
          </svg>
        </div>
        <h1 className="relative z-10 text-5xl font-bold text-white drop-shadow-md">Contact</h1>
      </section>

      {/* 2. Image Section - Driver Image */}
      <section className="relative h-[450px] w-full flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // Note: Once moved to /public, this path will work perfectly
            backgroundImage: "url('/images/driver1.jpeg')",
            backgroundColor: "#2d2d2d"
          }}
        >
          {/* Overlay to help text stand out */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic" style={{ fontFamily: 'cursive' }}>
            BUFU Travelers
          </h2>
          <p className="text-xl md:text-2xl italic leading-relaxed text-gray-200" style={{ fontFamily: 'cursive' }}>
            Enjoy reliable and luxurious chauffeur services in Nairobi, where comfort, professionalism, and safety come first. Travel in style, stress-free.
          </p>
        </div>
      </section>

      {/* 3. Contact Form Card - Simple Button & Fixed Padding */}
      <section className="py-20 px-4 md:px-12 lg:px-20 bg-gradient-to-b from-[#1a2421] to-[#2a3632] justify-center flex">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
          
          {/* Left Side - Form (Beige) */}
          {/* FIX: Increased pb-32 so the submit button is NOT near the curve */}
          <div className="bg-[#c4b59d] p-10 md:p-16 lg:p-20 pb-32 text-gray-900 flex flex-col items-center">
            <div className="w-full max-w-md">
              <h2 className="text-4xl font-bold mb-10">Contact</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Your name</label>
                  <input type="text" className="w-full p-4 bg-white/40 border border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Your email</label>
                  <input type="email" className="w-full p-4 bg-white/40 border border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Subject</label>
                  <input type="text" className="w-full p-4 bg-white/40 border border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-1">Your message (optional)</label>
                  <textarea rows={5} className="w-full p-4 bg-white/40 border border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700"></textarea>
                </div>
                
                {/* FIX: mt-12 creates space between the message box and the button */}
                <div className="mt-12">
                  <button className="bg-[#004170] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#00315a] transition-all shadow-md active:scale-95">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Info (Teal) */}
          <div className="bg-[#5f8a7d] p-10 md:p-16 lg:p-20 pb-32 flex flex-col justify-start items-center">
            <div className="w-full max-w-md">
              <h3 className="text-3xl font-bold mb-8 text-white">BUFUtravelers</h3>
              <p className="text-lg mb-12 leading-relaxed text-white/90">
                We would be delighted to assist you with your transportation needs. 
              </p>
              
              <div className="space-y-10">
                <p className="text-xl font-semibold border-l-4 border-orange-500 pl-4 text-white">Kenya, Nairobi.</p>
                <div className="flex items-center gap-6">
                  <span className="text-2xl bg-white/10 p-3 rounded-full">📱</span>
                  <span className="text-lg font-medium text-white">+254 743745924</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl bg-white/10 p-3 rounded-full">✉️</span>
                  <span className="text-lg font-medium text-white">bufutravels@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Section - "Reach Out To Us" Centered */}
      <section className="relative py-48 bg-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 via-orange-900/40 to-teal-900/40 opacity-50"></div>
          <div className="h-full w-full bg-[#1a2421] [clip-path:ellipse(80%_50%_at_50%_100%)]"></div>
        </div>
          
        <div className="relative z-10 text-center max-w-2xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-10">Reach Out To Us</h2>
          <p className="text-xl text-gray-200 leading-relaxed italic font-light">
            "We would be delighted to assist you with your transportation needs. 
            Please contact us for a personalized quote and discuss your specific requirements."
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;