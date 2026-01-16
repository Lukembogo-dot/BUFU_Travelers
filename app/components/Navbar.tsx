import React from 'react';
import { Car, Facebook, Instagram, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-4 px-8 flex justify-center items-center text-sm border-b border-gray-700">
        <div className="max-w-7xl w-full flex justify-between items-center">
          <div>Call Us At +254 112 930 320</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <Mail size={18} />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-slate-700 py-6 px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <Car className="text-white" size={28} />
            </div>
            <div>
              <div className="text-sm text-gray-200">Travelling Agency Kenya</div>
              <div className="text-2xl font-bold text-white">BUFUTravelers</div>
            </div>
          </div>
          <nav className="flex gap-8 items-center">
            <a href="#about" className="text-white hover:text-orange-400 transition font-semibold">
              ABOUT US
            </a>
            <a href="#services" className="text-white hover:text-orange-400 transition font-semibold">
              SERVICES
            </a>
            <a href="#blog" className="text-white hover:text-orange-400 transition font-semibold">
              BLOG
            </a>
            <a href="#contacts" className="text-white hover:text-orange-400 transition font-semibold">
              CONTACTS
            </a>
            <button className="text-white hover:text-orange-400 transition text-xl">
              🔍
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;