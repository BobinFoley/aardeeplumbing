import React, { useEffect } from 'react';
import { LocationService } from '../types';

interface CityDrainCleaningPageProps {
  location: LocationService;
  onBack: () => void;
}

const CityDrainCleaningPage: React.FC<CityDrainCleaningPageProps> = ({ location, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=2000" 
            alt={`Drain Cleaning in ${location.city}`}
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
              Expert Drain Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Drain Cleaning in <span className="text-blue-400">{location.city}, AL</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Stubborn clogs? Slow drains? Aardee Plumbing provides advanced hydro-jetting and rooter services to keep {location.city}'s pipes flowing freely.
            </p>
            <a href="tel:2517650333" className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-8 py-4 rounded-2xl inline-flex items-center space-x-3 shadow-xl transition-all transform hover:scale-105">
              <i className="fa-solid fa-phone"></i>
              <span>Call (251) 765-0333</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-blue-900 mb-6">Professional Drain Cleaning Services in {location.city}</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              A clogged drain is more than just a nuisance; it can lead to severe water damage and unsanitary conditions in your home. At Aardee Plumbing, we specialize in comprehensive drain cleaning services for residents and businesses in <strong>{location.city}, Alabama</strong>.
            </p>
            <p className="mb-4">
              Whether you're dealing with a kitchen sink backed up with grease, a bathroom drain clogged with hair, or a main sewer line blocked by tree roots, our licensed technicians have the tools and expertise to clear it. We utilize state-of-the-art equipment, including high-pressure hydro-jetting and video camera inspections, to identify and eliminate the root cause of the blockage.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 font-medium text-blue-900">
              <li>Advanced Hydro-Jetting to clear grease, sand, and sludge</li>
              <li>Video Camera Line Inspections for accurate diagnosis</li>
              <li>Rooter Services for stubborn tree root intrusions</li>
              <li>Preventative maintenance to keep your drains clear year-round</li>
            </ul>
            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Why {location.city} Chooses Us</h3>
            <p>
              We understand the unique plumbing challenges of the {location.city} area. From coastal sand infiltration to older historic pipes, our team is equipped to handle it all safely and effectively without damaging your plumbing system. Don't let a slow drain ruin your day—contact Aardee Plumbing for fast, reliable drain cleaning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityDrainCleaningPage;
