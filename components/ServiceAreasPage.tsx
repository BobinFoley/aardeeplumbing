import React, { useEffect } from 'react';
import ServiceMap from './ServiceMap';
import { CITIES } from '../constants';

interface ServiceAreasPageProps {
  onBack: () => void;
}

const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?auto=format&fit=crop&q=80&w=2000" 
            alt="Baldwin County Map"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={onBack}
            className="mb-8 text-blue-300 hover:text-white flex items-center space-x-2 font-bold transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Home</span>
          </button>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Service <span className="text-blue-400">Areas</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Proudly serving Foley, Gulf Shores, Orange Beach, and the surrounding Baldwin County communities with rapid, reliable plumbing services.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 p-4 md:p-8">
            <h2 className="text-3xl font-black text-blue-900 mb-8 text-center uppercase tracking-tight">Our Coverage Map</h2>
            <ServiceMap />
          </div>
        </div>
      </section>

      {/* Cities List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Local Experts</h2>
            <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Communities We Serve</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From the beach to the bay, our trucks are always nearby. Select your city to learn more about our specific services in your neighborhood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CITIES.map((city) => (
              <a 
                key={city.slug}
                href={`#/emergency-repairs-${city.slug}`}
                className="group bg-white border border-gray-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                    <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{city.city}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {city.description}
                </p>
                <span className="text-sm font-bold text-blue-500 uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">
                  View Local Services
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-[100px] opacity-50 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20 -ml-20 -mb-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Don't See Your City?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            We serve many smaller communities surrounding Foley, Gulf Shores, and Orange Beach. Give us a call to check if you're in our service range.
          </p>
          <a 
            href="tel:2517650333" 
            className="inline-flex items-center space-x-3 bg-white text-blue-900 text-xl font-black px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-white/10 transform hover:scale-105 active:scale-95"
          >
            <i className="fa-solid fa-phone"></i>
            <span>(251) 765-0333</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreasPage;
