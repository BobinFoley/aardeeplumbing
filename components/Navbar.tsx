
import React, { useState, useEffect } from 'react';
import { CITIES } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isDrainOpen, setIsDrainOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Water Heaters', href: '#/water-heaters' },
    { name: 'Service Area', href: '#/service-area' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-3' 
        : 'bg-blue-900 md:bg-slate-900/40 md:backdrop-blur-md py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <i className="fa-solid fa-faucet-drip text-white text-xl"></i>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            AARDEE<span className="text-blue-500">PLUMBING</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Locations Dropdown */}
          <div className="relative group">
            <button className={`font-medium flex items-center transition-colors hover:text-blue-500 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>
              Locations <i className="fa-solid fa-chevron-down ml-2 text-[10px]"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 translate-y-2 group-hover:translate-y-0">
              {CITIES.map(city => (
                <a 
                  key={city.slug} 
                  href={`#/plumbers-in-${city.slug}`} 
                  className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Plumbers in {city.city}
                </a>
              ))}
            </div>
          </div>

          {/* Drain Cleaning Dropdown */}
          <div className="relative group">
            <button className={`font-medium flex items-center transition-colors hover:text-blue-500 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>
              Drain Cleaning <i className="fa-solid fa-chevron-down ml-2 text-[10px]"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 translate-y-2 group-hover:translate-y-0">
              {CITIES.map(city => (
                <a 
                  key={city.slug} 
                  href={`#/drain-cleaning-${city.slug}`} 
                  className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  Drain Cleaning in {city.city}
                </a>
              ))}
            </div>
          </div>

          {/* Emergency Dropdown */}
          <div className="relative group">
            <button className={`font-black flex items-center transition-colors text-red-600 hover:text-red-700 ${isScrolled ? '' : 'text-red-400'}`}>
              24/7 EMERGENCY <i className="fa-solid fa-chevron-down ml-2 text-[10px]"></i>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 translate-y-2 group-hover:translate-y-0">
              <a 
                href="#/emergency-repairs" 
                className="block px-6 py-3 text-sm font-black text-red-600 hover:bg-red-50 transition-colors border-b border-gray-50 mb-2"
              >
                GENERAL EMERGENCY PAGE
              </a>
              <div className="px-6 py-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Select Your Area:</span>
              </div>
              {CITIES.map(city => (
                <a 
                  key={city.slug} 
                  href={`#/emergency-repairs-${city.slug}`} 
                  className="block px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {city.city} Plumbing
                </a>
              ))}
            </div>
          </div>

          <a
            href="tel:2517650333"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            (251) 765-0333
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} ${isScrolled ? 'text-gray-800' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 shadow-xl border-t transition-all overflow-y-auto max-h-[85vh] ${
          isScrolled ? 'bg-white border-gray-100' : 'bg-blue-900 border-blue-800'
        } py-4`}>
          <div className="flex flex-col space-y-1 px-6">
            <button 
              onClick={() => setIsEmergencyOpen(!isEmergencyOpen)}
              className="font-black text-xl py-4 text-red-500 flex justify-between items-center"
            >
              <div className="flex items-center">
                <i className="fa-solid fa-truck-fast mr-3"></i>
                24/7 EMERGENCY
              </div>
              <i className={`fa-solid fa-chevron-${isEmergencyOpen ? 'up' : 'down'} text-sm`}></i>
            </button>
            
            {isEmergencyOpen && (
              <div className={`pl-4 flex flex-col space-y-2 mb-4 animate-in slide-in-from-top-2 duration-300`}>
                <a
                  href="#/emergency-repairs"
                  className="py-2 text-base font-black text-red-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  General Emergency Info
                </a>
                <div className="h-px bg-gray-100/20 my-1"></div>
                {CITIES.map(city => (
                  <a
                    key={city.slug}
                    href={`#/emergency-repairs-${city.slug}`}
                    className={`py-2 text-base font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {city.city} Emergency Repairs
                  </a>
                ))}
              </div>
            )}

            {/* Locations Mobile Toggle */}
            <button 
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
              className={`font-semibold text-lg py-3 border-b border-transparent flex justify-between items-center ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Locations
              <i className={`fa-solid fa-chevron-${isLocationsOpen ? 'up' : 'down'} text-sm`}></i>
            </button>
            
            {isLocationsOpen && (
              <div className={`pl-4 flex flex-col space-y-2 mb-2 animate-in slide-in-from-top-2 duration-300`}>
                {CITIES.map(city => (
                  <a
                    key={city.slug}
                    href={`#/plumbers-in-${city.slug}`}
                    className={`py-2 text-base font-medium ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Plumbers in {city.city}
                  </a>
                ))}
              </div>
            )}

            {/* Drain Cleaning Mobile Toggle */}
            <button 
              onClick={() => setIsDrainOpen(!isDrainOpen)}
              className={`font-semibold text-lg py-3 border-b border-transparent flex justify-between items-center ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Drain Cleaning
              <i className={`fa-solid fa-chevron-${isDrainOpen ? 'up' : 'down'} text-sm`}></i>
            </button>
            
            {isDrainOpen && (
              <div className={`pl-4 flex flex-col space-y-2 mb-2 animate-in slide-in-from-top-2 duration-300`}>
                {CITIES.map(city => (
                  <a
                    key={city.slug}
                    href={`#/drain-cleaning-${city.slug}`}
                    className={`py-2 text-base font-medium ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Drain Cleaning in {city.city}
                  </a>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-lg py-3 border-b border-transparent ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-6">
              <a
                href="tel:2517650333"
                className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform block"
              >
                Call (251) 765-0333
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
