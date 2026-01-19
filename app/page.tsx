'use client';

import React, { useState } from 'react';
import { Car, Plane, Users, UserCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Hero from './components/Hero';

const BUFUTravelers: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const fleetImages = [
    { id: 1, image: '/images/people.jpg', name: 'Cynical Services' },
    { id: 2, image: '/images/wedding.jpg', name: 'Special Events' },
    { id: 3, image: '/images/driver2.png', name: 'Comfortable Rides' },
    { id: 4, image: '/images/inside.jpeg', name: 'Executive Transport' }
  ];

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? fleetImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === fleetImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      {/* Fleet Images Section - Carousel */}
      <section className="py-28 bg-black flex items-center justify-center">
        <div className="w-full px-8">
          <h2 className="text-5xl font-bold text-center text-white mb-24">Our Fleet</h2>
          <div className="flex items-center justify-center">
            <div className="max-w-5xl w-full">
              <div className="relative flex items-center justify-center gap-8">
                <button
                  onClick={handlePrev}
                  className="flex-shrink-0 p-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white transition-all shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft size={32} />
                </button>

                <div className="w-96 h-64 rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src={fleetImages[carouselIndex].image}
                    alt={fleetImages[carouselIndex].name}
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                  />
                </div>

                <button
                  onClick={handleNext}
                  className="flex-shrink-0 p-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white transition-all shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              <div className="text-center mt-12">
                <p className="text-2xl font-bold text-orange-400 mb-6">{fleetImages[carouselIndex].name}</p>
                <div className="flex gap-3 justify-center">
                  {fleetImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(index)}
                      className={`h-3 rounded-full transition-all ${
                        index === carouselIndex ? 'bg-orange-500 w-8' : 'bg-gray-600 w-3 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 bg-black"></div>

      {/* Fleet Details Section - FIXED MOBILE WIDTHS */}
      <section className="py-24 bg-gradient-to-b from-black via-yellow-900 to-yellow-700 flex items-center justify-center">
        <div className="w-full px-8">
          <div className="flex items-center justify-center">
            <div className="max-w-5xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* SUVs - Master Template (No fixed width) */}
                <div className="bg-black/30 rounded-2xl p-12 flex flex-col items-center text-center border border-orange-500/30 shadow-xl">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mb-8">
                    <Car className="text-white" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">SUVs</h3>
                  <p className="text-lg leading-relaxed text-gray-100">
                    For those seeking spaciousness and versatility, we offer a selection of luxury SUVs, such as the Toyota noah/voxy and the Toyota Vellfire/Alphard. Enjoy a luxurious and comfortable ride no matter the journey.
                  </p>
                </div>

                {/* Sedans - REMOVED fixed w-80 */}
                <div className="bg-black/30 rounded-2xl p-12 flex flex-col items-center text-center border border-orange-500/30 shadow-xl">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mb-8">
                    <Car className="text-white" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Sedans</h3>
                  <p className="text-lg leading-relaxed text-gray-100">
                    Our sedan fleet boasts a range of prestigious models, including the Mercedes-Benz E-Class and S-Class. Each vehicle is meticulously maintained for your comfort and safety.
                  </p>
                </div>

                {/* Minivans - REMOVED fixed w-80 */}
                <div className="bg-black/30 rounded-2xl p-12 flex flex-col items-center text-center border border-orange-500/30 shadow-xl">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mb-8">
                    <Car className="text-white" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Minivans</h3>
                  <p className="text-lg leading-relaxed text-gray-100">
                    We also provide a fleet of luxury minivans for larger groups. These vehicles are perfect for families or corporate groups, ensuring a smooth and enjoyable travel experience. (14 Seater and 16 Seater)
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-yellow-700"></div>

      {/* What We Really Do Section - REMOVED fixed w-80 */}
      <section className="py-40 bg-gradient-to-b from-slate-800 to-slate-700 flex items-center justify-center">
        <div className="w-full px-8">
          <h2 className="text-5xl font-bold text-center mb-20 py-8 text-white">
            What We Really Do
          </h2>
          <div className="flex items-center justify-center">
            <div className="max-w-7xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 place-items-center pt-32">
                
                {[
                  { id: '01', title: 'Corporate Transport', icon: <Users size={64} />, items: ['Executive Travel', 'Meeting Transfers', 'Corporate Events'] },
                  { id: '02', title: 'Airport Transfers', icon: <Plane size={64} />, items: ['Seamless Transfers', 'Reliable Service', 'Meet & Greet Service'] },
                  { id: '03', title: 'Wedding & Event Transport', icon: <Users size={64} />, items: ['Wedding Transportation', 'Event Transportation', 'Graduation Transportation'] },
                  { id: '04', title: 'Chauffeur Service', icon: <UserCircle size={64} />, items: ['Unmatched Service', 'Personalized Experience', 'Safety and Security'] }
                ].map((service) => (
                  <div key={service.id} className="border-3 border-orange-600 rounded-2xl p-10 bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 shadow-xl text-center h-full flex flex-col justify-center items-center w-full max-w-sm">
                    <div className="text-orange-500 mb-8 mx-auto">{service.icon}</div>
                    <div className="text-orange-400 text-2xl font-bold mb-4">{service.id}</div>
                    <h3 className="text-2xl font-bold text-teal-400 mb-8">{service.title}</h3>
                    <ul className="text-base space-y-4 text-gray-200">
                      {service.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-slate-700"></div>

      {/* Reach Out To Us Section */}
      <section className="py-32 pb-48 bg-gradient-to-b from-slate-700 to-yellow-800 flex items-center justify-center">
        <div className="w-full px-8">
          <div className="flex items-center justify-center">
            <div className="max-w-4xl w-full">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-12 text-white">Reach Out To Us</h2>
                <div className="flex justify-center mb-16">
                  <div className="w-48 h-2 bg-white rounded-full shadow-lg"></div>
                </div>
                <p className="text-2xl mb-16 leading-relaxed text-gray-100">
                  We would be delighted to assist you with your transportation needs. Please contact us for a personalized quote and discuss your specific requirements.
                </p>
                <button style={{ padding: '18px 60px', fontSize: '18px', borderRadius: '50px', backgroundColor: 'black', color: 'white', marginBottom: '80px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }} className="hover:bg-gray-800 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BUFUTravelers;