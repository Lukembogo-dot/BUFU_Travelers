'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import carImage from '../images/car1.png';
import jumaImage from '../images/juma.png';

const About: React.FC = () => {
  return (
    
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col">
      <Navbar />

      {/* Hero Section with Title */}
      <section className="py-16 bg-gradient-to-b from-yellow-800 to-yellow-900 rounded-lg mb-4  w-full justify-center flex">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-white">About</h1>
        </div>
      </section>

      {/* About BUFU Travellers - Split Screen */}
      <section className="py-8 bg-black justify-center flex mb-4 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-b from-yellow-900 to-yellow-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
              {/* Left Side - Image */}
              <div className="relative p-8 md:p-12 flex items-center justify-center bg-yellow-900/50">
                <div className="w-full h-full max-h-[500px]">
                  <img 
                    src={carImage.src} 
                    alt="BUFU Travellers Vehicle" 
                    className="w-full h-full object-contain rounded-lg shadow-2xl" 
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="bg-gradient-to-br from-yellow-900 to-orange-900 p-10 md:p-12 lg:p-16 flex items-center justify-center">
                <div className="w-full text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About BUFU Travellers</h2>
                  <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-100">
                    <p>
                      We provide luxury transportation for long and short distances.
                    </p>
                    <p>
                      Our chauffeurs are experienced in navigating various routes, ensuring a smooth and comfortable journey.
                    </p>
                    <p>
                      Whether you need transportation for a business trip or a weekend getaway, we have the perfect vehicle to meet your needs.
                    </p>
                    <p>
                      Our service is available 24/7, so you can book a ride whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black rounded-lg shadow-2xl mb-4 justify-center flex w-full">
        <div className="max-w-7xl mx-auto px-10 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-t-lg mb-5 p-5">
                <img
                  src={jumaImage.src}
                  alt="Lowell Juma"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-yellow-800 to-orange-900 px-6 py-8 rounded-b-lg space-y-4">
                <h3 className="text-2xl font-bold text-white">LOWELL JUMA</h3>
                  <p className="text-sm leading-relaxed text-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
                    </p>
                    </div>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-t-lg mb-0">
                <img
                  src={jumaImage.src}
                  alt="Peejay"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-yellow-800 to-orange-900 p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-4 p-4 text-white">PEEJAY</h3>
                <p className="text-sm leading-relaxed p-5 text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-t-lg mb-0">
                <img
                  src={jumaImage.src}
                  alt="Jane Doe"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-yellow-800 to-orange-900 p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-4 p-4 text-white">JANE DOE</h3>
                <p className="text-sm leading-relaxed p-5 text-gray-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Background Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden rounded-lg mb-4">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed bg-gray-800"
          style={{
            backgroundImage: "url('/path/to/car-bottom.jpg')",
            // If no image, use gradient: 
            background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content over the fixed background */}
        <div className="relative z-10 text-center px-8">
          <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'cursive' }}>
            BUFU Travels
          </h2>
          <p className="text-3xl text-gray-200" style={{ fontFamily: 'cursive' }}>
            Here For Your Convenience
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;