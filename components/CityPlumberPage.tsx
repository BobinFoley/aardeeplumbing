import React, { useEffect } from 'react';
import { LocationService } from '../types';
import { SERVICES } from '../constants';

interface CityPlumberPageProps {
  location: LocationService;
  onBack: () => void;
}

const CityPlumberPage: React.FC<CityPlumberPageProps> = ({ location, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt={`Plumbers in ${location.city}`}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <button onClick={onBack} className="mb-8 text-blue-300 hover:text-white flex items-center space-x-2 font-bold transition-colors">
            <i className="fa-solid fa-arrow-left"></i><span>Back to Home</span>
          </button>
          <div className="max-w-4xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-black uppercase tracking-widest mb-6">
              Local Plumbing Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Trusted Plumbers in <span className="text-blue-400">{location.city}, AL</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              {location.description} Aardee Plumbing provides top-rated residential and commercial plumbing services across {location.city}.
            </p>
            <a href="tel:2517650333" className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-8 py-4 rounded-2xl inline-flex items-center space-x-3 shadow-xl transition-all transform hover:scale-105">
              <i className="fa-solid fa-phone"></i>
              <span>Call (251) 765-0333</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Comprehensive Care</h2>
            <h3 className="text-4xl font-black text-blue-900">Plumbing Services in {location.city}</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <div key={service.id} className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6">
                  <i className={service.icon}></i>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-blue-900 mb-6">Why Choose Aardee Plumbing in {location.city}?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              When you need a reliable plumber in <strong>{location.city}, Alabama</strong>, you want a team that understands local plumbing codes, soil conditions, and water quality. Aardee Plumbing has been serving the {location.city} community with dedication, offering everything from routine maintenance to complex whole-house repiping.
            </p>
            <p className="mb-4">
              Our licensed and insured technicians arrive fully equipped to handle any issue on the spot. We pride ourselves on transparent pricing, clean work areas, and lasting solutions. Whether you're dealing with a stubborn clog, a failing water heater, or need fixture upgrades, we are {location.city}'s go-to plumbing professionals.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 font-medium text-blue-900">
              <li>Fast, local response times in {location.city}</li>
              <li>Upfront, flat-rate pricing with no hidden fees</li>
              <li>Master-licensed and fully insured plumbers</li>
              <li>100% satisfaction guarantee on all repairs and installations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityPlumberPage;
