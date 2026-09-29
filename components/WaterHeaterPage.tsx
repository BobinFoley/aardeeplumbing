import React, { useEffect } from 'react';
import { WATER_HEATER_BRANDS } from '../constants';

interface WaterHeaterPageProps {
  onBack: () => void;
}

const WaterHeaterPage: React.FC<WaterHeaterPageProps> = ({ onBack }) => {
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
            alt="Water Heater Services"
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
              Expert Installation & Repair
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Professional <span className="text-blue-400">Water Heater</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Reliable hot water for your home or business. We specialize in traditional tank and tankless water heaters from the industry's top brands.
            </p>
            <a href="tel:2517650333" className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-black px-8 py-4 rounded-2xl inline-flex items-center space-x-3 shadow-xl transition-all transform hover:scale-105">
              <i className="fa-solid fa-phone"></i>
              <span>Call (251) 765-0333</span>
            </a>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Comprehensive Solutions</h2>
            <h3 className="text-4xl font-black text-blue-900">Residential & Commercial</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Residential */}
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-6">
                <i className="fa-solid fa-house"></i>
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-4">Residential Water Heaters</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Never run out of hot water again. We offer fast repairs, routine maintenance, and full replacements for homes of all sizes. Whether you want a high-efficiency tankless upgrade or a reliable traditional tank, we have the perfect solution for your family's needs.
              </p>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Tankless Water Heater Installation</li>
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Traditional Gas & Electric Tanks</li>
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Routine Flushing & Maintenance</li>
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> 24/7 Emergency Leak Repair</li>
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-6">
                <i className="fa-solid fa-building"></i>
              </div>
              <h4 className="text-2xl font-bold text-blue-900 mb-4">Commercial Water Heaters</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Downtime costs your business money. We provide heavy-duty commercial water heating solutions for restaurants, hotels, apartments, and industrial facilities. Our master plumbers are trained to handle high-capacity systems and complex manifold installations.
              </p>
              <ul className="space-y-3 text-blue-900 font-medium">
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> High-Capacity Commercial Tanks</li>
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Multi-Unit Tankless Racks</li>
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Boiler Repair & Replacement</li>
                <li><i className="fa-solid fa-check text-green-500 mr-2"></i> Priority Commercial Dispatch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-blue-900 mb-6">We Service & Install Top Brands</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We partner with the industry's most trusted manufacturers to ensure your new water heater provides years of reliable, energy-efficient performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {WATER_HEATER_BRANDS.map((brand, idx) => (
              <a 
                key={idx} 
                href={`#/water-heaters/${brand.slug}`}
                className="bg-gray-50 border border-gray-100 px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 text-xl font-bold text-gray-700 hover:text-blue-600 flex items-center justify-center min-w-[200px] transition-all"
              >
                {brand.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-8">Need Hot Water Now?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our expert technicians are ready to diagnose and fix your water heater issues today.
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

export default WaterHeaterPage;
