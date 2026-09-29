import React, { useEffect } from 'react';
import ServiceMap from './ServiceMap';
import { CITIES } from '../constants';

interface ServiceAreaPageProps {
  onBack: () => void;
}

const ServiceAreaPage: React.FC<ServiceAreaPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
           {/* Background Image */}
           <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Service Area Map"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Our Service <span className="text-blue-400">Area</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Proudly serving Baldwin County with rapid, reliable plumbing solutions. From the beaches to the bay, we're your local experts.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ServiceMap />

      {/* Cities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Local Coverage</h2>
            <h3 className="text-4xl font-black text-blue-900">Communities We Serve</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CITIES.map((city) => (
              <a 
                key={city.slug}
                href={`#/emergency-repairs-${city.slug}`}
                className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{city.city}</h4>
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {city.description}
                </p>
                <div className="flex items-center text-sm font-bold text-blue-500 uppercase tracking-wide">
                  <span>View Services</span>
                  <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-8">Don't See Your City?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We often service surrounding areas. Give us a call to check if we can reach your location.
          </p>
          <a 
            href="tel:2517650333" 
            className="inline-flex items-center space-x-3 bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl"
          >
            <i className="fa-solid fa-phone"></i>
            <span>(251) 765-0333</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreaPage;
