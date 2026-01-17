'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contacts' },
  ];

  const servicesLinks = [
    { name: 'Airport Transfers', href: '/services/airport' },
    { name: 'Corporate Travel', href: '/services/corporate' },
    { name: 'Event Transportation', href: '/services/events' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-orange-600/30">
      <div className="flex items-center justify-between h-16">
        {/* Left/Center - Centered container with logo and menu */}
        <div className="flex-1">
          <div className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition"
            >
              BUFU Travelers
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
              <nav className="flex items-center gap-10">
                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="relative text-white hover:text-orange-400 transition
                               after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                               after:w-0 after:bg-orange-500 after:transition-all
                               hover:after:w-full"
                  >
                    Services
                  </button>

                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-black border border-orange-600/30 rounded shadow-lg z-10 py-2 min-w-56">
                      {servicesLinks.map((link, index) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-6 py-3 text-white hover:bg-orange-600/20 hover:text-orange-400 transition ${
                            index < servicesLinks.length - 1
                              ? 'border-b border-orange-600/20'
                              : ''
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-white hover:text-orange-400 transition
                               after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                               after:w-0 after:bg-orange-500 after:transition-all
                               hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - Book Us Button at edge */}
        <div className="hidden md:flex pr-6">
          <Link
            href="/contacts"
            className="px-6 py-3 rounded bg-orange-500 text-black font-semibold 
                       hover:bg-black hover:text-orange-500 hover:border hover:border-orange-500
                       transition"
          >
            Book Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 pb-4 pt-2 px-6 text-sm font-medium">
          <div className="text-white font-semibold">Services</div>
          {servicesLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-orange-400 transition pl-4"
            >
              {link.name}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-orange-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navigation;
