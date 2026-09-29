import React, { useEffect } from 'react';

interface BrandWaterHeaterPageProps {
  brandName: string;
  onBack: () => void;
}

const BrandWaterHeaterPage: React.FC<BrandWaterHeaterPageProps> = ({ brandName, onBack }) => {
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
            alt={`${brandName} Water Heaters in Foley, AL`}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <button onClick={onBack} className="mb-8 text-blue-300 hover:text-white flex items-center space-x-2 font-bold transition-colors">
            <i className="fa-solid fa-arrow-left"></i><span>Back to Water Heaters</span>
          </button>
          <div className="max-w-4xl">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-md text-sm font-black uppercase tracking-widest mb-6">
              Foley, AL Authorized Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {brandName} Water Heaters in <span className="text-blue-400">Foley, AL</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Expert installation, repair, and maintenance for {brandName} water heaters across Foley and surrounding Baldwin County areas.
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
          <h2 className="text-3xl font-black text-blue-900 mb-6">Your Local Foley {brandName} Experts</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              When homeowners and businesses in <strong>Foley, Alabama</strong> need reliable hot water, they trust {brandName} water heaters. At Aardee Plumbing, our master technicians are highly trained in the installation, diagnosis, and repair of all {brandName} models, including high-efficiency tankless systems and traditional gas or electric tanks.
            </p>
            <p className="mb-4">
              Foley's unique coastal environment and local water conditions require plumbing solutions that are built to last. {brandName} systems are known for their durability, but even the best equipment needs professional maintenance. Whether you're dealing with hard water scale buildup, a sudden leak, or simply want to upgrade to a more energy-efficient {brandName} unit, we are Foley's go-to specialists.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 font-medium text-blue-900">
              <li><strong>Emergency Repair:</strong> 24/7 rapid response in Foley for failing {brandName} units.</li>
              <li><strong>Professional Installation:</strong> Code-compliant sizing and installation of new {brandName} water heaters.</li>
              <li><strong>Routine Maintenance:</strong> Flushing and descaling to extend the life of your {brandName} system in Foley's water conditions.</li>
              <li><strong>Warranty Service:</strong> We use genuine {brandName} replacement parts to ensure optimal performance.</li>
            </ul>
            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Choose Aardee Plumbing for Your {brandName}?</h3>
            <p>
              We don't just serve Foley; we are part of the community. We understand the local building codes and the specific needs of Foley residents. When you call us for {brandName} service, you get upfront pricing, master-licensed expertise, and a commitment to keeping your home safe and comfortable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandWaterHeaterPage;
