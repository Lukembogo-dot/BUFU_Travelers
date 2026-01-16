import React from 'react';
import { Phone, Instagram, Mail, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-800 to-yellow-900 py-24 flex items-center justify-center border-t-2 border-orange-300">
      <div className="w-full px-8">
        <div className="flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center mb-16">
              {/* About */}
              <div className="text-center w-80">
                <h4 className="text-2xl font-bold mb-6 text-white">About Us</h4>
                <p className="text-lg leading-relaxed text-teal-100">
                  We provide luxury transportation for long and short distances. Our chauffeurs are experienced in navigating various routes, ensuring a smooth and comfortable journey.
                </p>
              </div>

              {/* Links */}
              <div className="text-center w-80">
                <h4 className="text-2xl font-bold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-4 text-lg">
                  <li>
                    <a href="#privacy" className="text-white hover:text-orange-400 transition">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="text-white hover:text-orange-400 transition">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#psv" className="text-white hover:text-orange-400 transition">
                      PSV
                    </a>
                  </li>
                  <li>
                    <a href="#terms-of-use" className="text-white hover:text-orange-400 transition">
                      Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a href="#privacy-policy" className="text-white hover:text-orange-400 transition">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="text-center w-80">
                <h4 className="text-2xl font-bold mb-6 text-white">Contact Us</h4>
                <ul className="space-y-5 text-lg">
                  <li className="flex items-center justify-center gap-4">
                    <Phone size={22} className="text-orange-400" />
                    <a href="tel:+254112930320" className="text-white hover:text-orange-400 transition">PHONE</a>
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <Instagram size={22} className="text-orange-400" />
                    <a href="#instagram" className="text-white hover:text-orange-400 transition">INSTAGRAM</a>
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <Mail size={22} className="text-orange-400" />
                    <a href="mailto:info@bufutravelers.com" className="text-white hover:text-orange-400 transition">EMAIL</a>
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <Facebook size={22} className="text-orange-400" />
                    <a href="#facebook" className="text-white hover:text-orange-400 transition">FACEBOOK</a>
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <Twitter size={22} className="text-orange-400" />
                    <a href="#twitter" className="text-white hover:text-orange-400 transition">X (TWITTER)</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-yellow-700 pt-12 text-center">
              <p className="text-lg text-teal-100">
                &copy; {new Date().getFullYear()} BUFU Travelers. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;