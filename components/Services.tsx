
import React from 'react';
import { SERVICES, CITIES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Comprehensive Plumbing Solutions</h3>
          <p className="text-gray-600 text-lg">From minor leaks to major installations, our team handles every project with precision and care. Licensed, insured, and ready to help.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-300/60 hover:shadow-2xl hover:shadow-blue-900/20 hover:bg-blue-50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <i className={`${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-blue-800 transition-colors">{service.description}</p>
              
              {service.id === 'emergency' ? (
                <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                  <p className="text-[10px] font-bold uppercase text-gray-400 mb-3 tracking-widest group-hover:text-blue-400">Select Your Location:</p>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map(city => (
                      <a 
                        key={city.slug} 
                        href={`#/emergency-repairs-${city.slug}`}
                        className="text-[11px] font-bold bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-lg transition-all border border-gray-200 hover:border-blue-600 group-hover:bg-white group-hover:shadow-sm"
                      >
                        {city.city}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href="#contact" className="text-blue-600 font-bold flex items-center hover:translate-x-2 transition-transform">
                  Learn More <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-900/50">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Need an immediate emergency fix?</h3>
              <p className="text-blue-100 text-lg opacity-80">Don't let a small leak turn into a flood. Our emergency crew is on standby 24 hours a day, 7 days a week.</p>
            </div>
            <a 
              href="tel:2517650333" 
              className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-colors shadow-xl transform hover:scale-105 duration-200"
            >
              <i className="fa-solid fa-phone mr-3 text-blue-600"></i>
              CALL NOW
            </a>
          </div>
          {/* Abstract pattern decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/50 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/50 rounded-full blur-3xl -ml-32 -mb-32 animate-pulse [animation-delay:1s]"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
