import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Top curved gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-orange-600 to-orange-400"
        style={{
          clipPath: 'ellipse(120% 100% at 50% 0%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
          Welcome to our premier transport company. We are{' '}
          <span className="text-yellow-200">committed</span> to providing luxurious
          and reliable transportation services to discerning clients.
        </h1>
        
        <div className="flex gap-4 justify-center mt-8">
          <button className="px-8o py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-orange-600 transition font-medium">
            Learn more
          </button>
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium">
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Bottom curved gradient overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-700 to-black"
        style={{
          clipPath: 'ellipse(120% 100% at 50% 100%)'
        }}
      />
    </section>
  );
};

export default Hero;