import React from 'react';
import { ABOUT_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src={ABOUT_IMAGE} 
                alt="Plumbing Specialist working" 
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Float experience card */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl z-20">
              <p className="text-5xl font-black mb-1">15+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Service</p>
            </div>
            {/* Background elements */}
            <div className="absolute top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-0"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-8 leading-tight">Your Local Foley Al Plumbing Experts.</h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Aardee Plumbing began with a simple mission: to provide the highest quality plumbing services while maintaining an uncompromising level of integrity and customer service.
            </p>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Serving the greater Foley Alabama area, we've built our reputation on being prompt, professional, and precise. Whether you have a dripping faucet or need a complete sewer line replacement, we treat your home as if it were our own.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div>
                  <h5 className="font-bold text-blue-900">Fully Licensed</h5>
                  <p className="text-sm text-gray-500">Board-certified specialists</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h5 className="font-bold text-blue-900">Bonded & Insured</h5>
                  <p className="text-sm text-gray-500">Complete peace of mind</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h5 className="font-bold text-blue-900">Punctual Arrival</h5>
                  <p className="text-sm text-gray-500">We respect your time</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <i className="fa-solid fa-tag"></i>
                </div>
                <div>
                  <h5 className="font-bold text-blue-900">Flat Rate Pricing</h5>
                  <p className="text-sm text-gray-500">No hidden surprises</p>
                </div>
              </div>
            </div>

            <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10">
              Meet The Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;