
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-end pb-24 md:pb-0 md:items-center overflow-hidden bg-blue-950">
      {/* Background Image - Full Size */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <img
          src="https://lh3.googleusercontent.com/d/1l0FAPjU1ZybodSw063DDD-jL8Fwh8ge7"
          alt="Aardee Plumbing Team"
          className="absolute top-0 left-0 w-full h-full object-cover object-top md:hidden"
        />
        {/* Desktop Image */}
        <img
          src="https://storage.googleapis.com/micromanagedmedia-ivr-recordings/Website%20Media/aardeeplumbing/large-hero-aardeeplumber.jpg"
          alt="Aardee Plumbing Team"
          className="hidden md:block w-full h-full object-cover object-center"
        />
        
        {/* Desktop Gradient: Horizontal - Reduced opacity from 60 to 50 for brighter right side */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/50 to-transparent"></div>

        {/* Mobile Gradient: Vertical, restricted to bottom 20% */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-80% to-blue-950"></div>
        
        {/* General tint for consistency - Reduced opacity from 10% to 5% to brighten the image */}
        <div className="absolute inset-0 bg-black/[0.05]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white flex flex-col items-center md:items-start text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/30 backdrop-blur-md border border-blue-400/40 text-blue-100 px-3 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6">
            <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Expert Plumbing Service</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-lg">
            The Plumber Your <br />
            <span className="text-blue-400">Neighbors Trust.</span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-blue-100 mb-6 md:mb-8 max-w-2xl leading-relaxed font-medium drop-shadow-md">
            Licensed. Insured. On-Time. Quality you can see and service you can feel across Foley and Baldwin County.
          </p>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-row space-x-4 w-auto">
            <a
              href="tel:2517650333"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 text-center flex items-center justify-center space-x-3 transform active:scale-95"
            >
              <i className="fa-solid fa-phone"></i>
              <span>(251) 765-0333</span>
            </a>

            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center transform active:scale-95"
            >
              Get a Fast Quote
            </a>
          </div>

          {/* Review Showcase Element (Replaces previous Stats) */}
          <div className="mt-10 md:mt-16 flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full pr-8 pl-2 py-2.5 w-fit hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="flex -space-x-4 mr-5">
              {[
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=150", // Plumbing Work
                "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=150", // Technician
                "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=150", // Pipes
                "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=150"  // Truck/Work
              ].map((img, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-blue-950 overflow-hidden relative z-10">
                  <img src={img} alt="Job Done" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-400 text-sm mb-1 space-x-0.5">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-white text-sm font-medium tracking-wide">
                <span className="font-bold">50+</span> 5-star reviews locally
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-24 overflow-hidden leading-none z-20 translate-y-px">
        <svg className="relative block w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C41.4,56.55,112.33,75.14,172,69.54,231.6,63.95,283.47,65.3,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3 pb-safe flex items-center gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:2517650333" className="flex-1 bg-blue-600 text-white px-2 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
          <i className="fa-solid fa-phone"></i> (251) 765-0333
        </a>
        <a href="#contact" className="flex-1 bg-blue-50 text-blue-900 border border-blue-200 px-2 py-3.5 rounded-xl font-bold text-sm shadow-sm flex items-center justify-center active:scale-95 transition-transform">
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;
