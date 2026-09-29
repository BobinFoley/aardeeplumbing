
import React, { useEffect } from 'react';

interface EmergencyRepairsPageProps {
  onBack: () => void;
}

const EmergencyRepairsPage: React.FC<EmergencyRepairsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emergencyIssues = [
    {
      title: "Burst Pipes",
      description: "A burst pipe can dump hundreds of gallons of water into your home in minutes. Shut off your main valve and call us immediately.",
      icon: "fa-solid fa-burst"
    },
    {
      title: "Sewer Backups",
      description: "Raw sewage in your home is a major health hazard. We use hydro-jetting to clear main line blockages fast.",
      icon: "fa-solid fa-biohazard"
    },
    {
      title: "Gas Leaks",
      description: "If you smell rotten eggs, leave the house and call us. We are certified for emergency gas line repair and leak detection.",
      icon: "fa-solid fa-fire-flame-simple"
    },
    {
      title: "Water Heater Failure",
      description: "No hot water or a leaking tank? We provide 24/7 repair or replacement to get your showers hot again.",
      icon: "fa-solid fa-faucet"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-red-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=2000" 
            alt="Emergency Plumbing Truck"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={onBack}
            className="mb-8 text-red-400 hover:text-white flex items-center space-x-2 font-bold transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Home</span>
          </button>
          
          <div className="max-w-4xl">
            <div className="inline-block bg-white text-red-600 px-4 py-1 rounded-md text-sm font-black uppercase tracking-widest mb-6 animate-pulse">
              Available 24/7/365
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Plumbing <span className="text-red-500">Emergency?</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl leading-relaxed">
              Don't wait. A small leak can become a disaster in minutes. Our master plumbers are on the road and ready to help you NOW.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="tel:2517650333" 
                className="bg-red-600 hover:bg-red-700 text-white text-3xl font-black px-12 py-6 rounded-2xl flex items-center justify-center space-x-4 shadow-2xl shadow-red-600/40 transition-all transform hover:scale-105 active:scale-95"
              >
                <i className="fa-solid fa-phone-volume animate-shake"></i>
                <span>(251) 765-0333</span>
              </a>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
                <span className="text-white font-bold text-lg uppercase tracking-tight">Rapid Response Crew On Duty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Priority Service</h2>
            <h3 className="text-4xl md:text-5xl font-black text-blue-900">Common Emergency Repairs</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyIssues.map((issue, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:border-red-200 transition-all group">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <i className={`${issue.icon} text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">{issue.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
                  className="rounded-[3rem] shadow-2xl" 
                  alt="Plumbing Van Interior" 
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl">
                  <p className="text-4xl font-black mb-1">60</p>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Minute Response</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Our Guarantee</h2>
              <h3 className="text-4xl font-black text-blue-900 mb-8 uppercase">We don't just fix leaks.<br/>We stop the damage.</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Fully Stocked Mobile Units",
                    desc: "Our 'Warehouse on Wheels' means we have 99% of repair parts on the truck."
                  },
                  {
                    title: "Master Licensed Technicians",
                    desc: "You aren't getting a trainee. You're getting a master plumber with years of experience."
                  },
                  {
                    title: "Upfront Emergency Pricing",
                    desc: "No surprises. We quote the price before we start the work, even at 3 AM."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-red-50 text-red-600 p-2 rounded-lg mt-1">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-900 text-lg">{item.title}</h5>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Save Your Home From Water Damage</h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-3xl mx-auto">
            Our dispatchers are waiting for your call. Let's get your plumbing crisis solved today.
          </p>
          <a 
            href="tel:2517650333" 
            className="inline-flex items-center space-x-4 bg-white text-red-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-red-50 transition-all shadow-2xl"
          >
            <i className="fa-solid fa-phone"></i>
            <span>CALL (251) 765-0333</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default EmergencyRepairsPage;