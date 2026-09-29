
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ServiceMap from './components/ServiceMap';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import LocationServicePage from './components/LocationServicePage';
import EmergencyRepairsPage from './components/EmergencyRepairsPage';
import ServiceAreaPage from './components/ServiceAreaPage';
import CityPlumberPage from './components/CityPlumberPage';
import CityDrainCleaningPage from './components/CityDrainCleaningPage';
import WaterHeaterPage from './components/WaterHeaterPage';
import BrandWaterHeaterPage from './components/BrandWaterHeaterPage';
import { TESTIMONIALS, CITIES, WATER_HEATER_BRANDS } from './constants';
import { Testimonial, LocationService } from './types';

const AnimatedTestimonialCard: React.FC<{ review: Testimonial; index: number }> = ({ review, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`bg-white/10 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] relative transform transition-all duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        hover:scale-[1.02] hover:-translate-y-3 hover:bg-white/[0.15] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-default`}
    >
      <div className="text-yellow-400 text-lg mb-6 transition-transform duration-300 group-hover:scale-110 origin-left">
        {[...Array(review.rating)].map((_, i) => (
          <i key={i} className="fa-solid fa-star mr-1"></i>
        ))}
      </div>
      <p className="text-blue-50 text-xl leading-relaxed italic mb-10">"{review.content}"</p>
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-blue-400 transition-colors duration-300">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">{review.name}</h4>
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider opacity-80">{review.role}</p>
        </div>
      </div>
      <i className="fa-solid fa-quote-right absolute top-10 right-10 text-6xl text-white/5 pointer-events-none transition-all duration-500 group-hover:text-white/10 group-hover:scale-110"></i>
    </div>
  );
};

const App: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<LocationService | null>(null);
  const [isEmergencyPage, setIsEmergencyPage] = useState(false);
  const [isServiceAreaPage, setIsServiceAreaPage] = useState(false);
  const [isWaterHeaterPage, setIsWaterHeaterPage] = useState(false);
  const [currentWaterHeaterBrand, setCurrentWaterHeaterBrand] = useState<{name: string, slug: string} | null>(null);
  const [currentPlumberLocation, setCurrentPlumberLocation] = useState<LocationService | null>(null);
  const [currentDrainLocation, setCurrentDrainLocation] = useState<LocationService | null>(null);

  // Metadata management for SEO
  useEffect(() => {
    let title = "Aardee Plumbing | Expert Plumber in Foley, AL";
    let description = "Aardee Plumbing (R-D Plumbing) offers 24/7 emergency plumbing services in Foley, AL and surrounding areas. Licensed & insured specialists.";

    if (currentWaterHeaterBrand) {
      title = `${currentWaterHeaterBrand.name} Water Heaters in Foley, AL | Aardee Plumbing`;
      description = `Expert installation, repair, and maintenance for ${currentWaterHeaterBrand.name} water heaters in Foley, AL. Call Aardee Plumbing at (251) 765-0333.`;
    } else if (isWaterHeaterPage) {
      title = "Water Heater Repair & Installation | Aardee Plumbing";
      description = "Expert residential and commercial water heater services. We install and repair top brands like Rheem, Rinnai, and Navien. Call (251) 765-0333.";
    } else if (isEmergencyPage) {
      title = "24/7 Emergency Plumbing Repairs | Aardee Plumbing";
      description = "Immediate 24/7 emergency plumbing services for burst pipes, sewer backups, and gas leaks in Baldwin County. Call (251) 765-0333.";
    } else if (isServiceAreaPage) {
      title = "Service Area | Aardee Plumbing - Foley, Gulf Shores, Orange Beach";
      description = "Aardee Plumbing serves all of Baldwin County including Foley, Gulf Shores, Orange Beach, Fairhope, and Daphne. Check our service map.";
    } else if (currentDrainLocation) {
      title = `Drain Cleaning in ${currentDrainLocation.city}, AL | Aardee Plumbing`;
      description = `Need professional drain cleaning in ${currentDrainLocation.city}, AL? Aardee Plumbing offers hydro-jetting and rooter services to clear stubborn clogs fast. Call (251) 765-0333.`;
    } else if (currentPlumberLocation) {
      title = `Plumbers in ${currentPlumberLocation.city}, AL | Aardee Plumbing`;
      description = `Looking for top-rated plumbers in ${currentPlumberLocation.city}, AL? Aardee Plumbing offers expert residential and commercial plumbing services. Call (251) 765-0333 today.`;
    } else if (currentLocation) {
      title = `Emergency Plumber in ${currentLocation.city}, AL | Aardee Plumbing`;
      description = `Need an emergency plumber in ${currentLocation.city}? Aardee Plumbing provides rapid 24/7 service for all local residents. Licensed and insured.`;
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [currentLocation, isEmergencyPage, isServiceAreaPage, currentPlumberLocation, currentDrainLocation, isWaterHeaterPage, currentWaterHeaterBrand]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Brand-specific Water Heater Pages
      if (hash.startsWith('#/water-heaters/')) {
        const slug = hash.replace('#/water-heaters/', '');
        const brand = WATER_HEATER_BRANDS.find(b => b.slug === slug);
        if (brand) {
          setCurrentWaterHeaterBrand(brand);
          setIsWaterHeaterPage(false);
          setIsServiceAreaPage(false);
          setIsEmergencyPage(false);
          setCurrentLocation(null);
          setCurrentPlumberLocation(null);
          setCurrentDrainLocation(null);
          window.scrollTo(0, 0);
          return;
        }
      }

      // General Emergency Page
      if (hash === '#/emergency-repairs') {
        setIsEmergencyPage(true);
        setCurrentLocation(null);
        setIsServiceAreaPage(false);
        setIsWaterHeaterPage(false);
        setCurrentWaterHeaterBrand(null);
        setCurrentPlumberLocation(null);
        setCurrentDrainLocation(null);
        window.scrollTo(0, 0);
        return;
      }

      // Service Area Page
      if (hash === '#/service-area') {
        setIsServiceAreaPage(true);
        setIsEmergencyPage(false);
        setIsWaterHeaterPage(false);
        setCurrentWaterHeaterBrand(null);
        setCurrentLocation(null);
        setCurrentPlumberLocation(null);
        setCurrentDrainLocation(null);
        window.scrollTo(0, 0);
        return;
      }

      // Water Heater Page
      if (hash === '#/water-heaters') {
        setIsWaterHeaterPage(true);
        setIsServiceAreaPage(false);
        setIsEmergencyPage(false);
        setCurrentWaterHeaterBrand(null);
        setCurrentLocation(null);
        setCurrentPlumberLocation(null);
        setCurrentDrainLocation(null);
        window.scrollTo(0, 0);
        return;
      }

      // City-specific Drain Cleaning Pages
      if (hash.startsWith('#/drain-cleaning-')) {
        const slug = hash.replace('#/drain-cleaning-', '');
        const city = CITIES.find(c => c.slug === slug);
        if (city) {
          setCurrentDrainLocation(city);
          setCurrentPlumberLocation(null);
          setCurrentLocation(null);
          setIsEmergencyPage(false);
          setIsServiceAreaPage(false);
          setIsWaterHeaterPage(false);
          setCurrentWaterHeaterBrand(null);
          window.scrollTo(0, 0);
          return;
        }
      }

      // City-specific Plumber Pages
      if (hash.startsWith('#/plumbers-in-')) {
        const slug = hash.replace('#/plumbers-in-', '');
        const city = CITIES.find(c => c.slug === slug);
        if (city) {
          setCurrentPlumberLocation(city);
          setCurrentDrainLocation(null);
          setCurrentLocation(null);
          setIsEmergencyPage(false);
          setIsServiceAreaPage(false);
          setIsWaterHeaterPage(false);
          setCurrentWaterHeaterBrand(null);
          window.scrollTo(0, 0);
          return;
        }
      }

      // City-specific Emergency Pages
      if (hash.startsWith('#/emergency-repairs-')) {
        const slug = hash.replace('#/emergency-repairs-', '');
        const city = CITIES.find(c => c.slug === slug);
        if (city) {
          setCurrentLocation(city);
          setCurrentPlumberLocation(null);
          setCurrentDrainLocation(null);
          setIsEmergencyPage(false);
          setIsServiceAreaPage(false);
          setIsWaterHeaterPage(false);
          setCurrentWaterHeaterBrand(null);
          window.scrollTo(0, 0);
          return;
        }
      }
      
      // Main Page Logic
      setIsEmergencyPage(false);
      setIsServiceAreaPage(false);
      setIsWaterHeaterPage(false);
      setCurrentWaterHeaterBrand(null);
      setCurrentLocation(null);
      setCurrentPlumberLocation(null);
      setCurrentDrainLocation(null);
      
      // Handle Scroll-to-Top for Logo/Home links
      if (hash === '' || hash === '#/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Effect to handle scrolling to sections after view transition
  useEffect(() => {
    if (!currentLocation && !isEmergencyPage && !isServiceAreaPage && !currentPlumberLocation && !currentDrainLocation && !isWaterHeaterPage && !currentWaterHeaterBrand) {
      const hash = window.location.hash;
      if (hash && hash !== '#/' && !hash.startsWith('#/')) {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [currentLocation, isEmergencyPage, isServiceAreaPage, currentPlumberLocation, currentDrainLocation, isWaterHeaterPage, currentWaterHeaterBrand]);

  const navigateHome = () => {
    window.location.hash = '';
    setCurrentLocation(null);
    setCurrentPlumberLocation(null);
    setCurrentDrainLocation(null);
    setCurrentWaterHeaterBrand(null);
    setIsEmergencyPage(false);
    setIsServiceAreaPage(false);
    setIsWaterHeaterPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentWaterHeaterBrand) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <BrandWaterHeaterPage brandName={currentWaterHeaterBrand.name} onBack={() => { window.location.hash = '#/water-heaters'; }} />
        </main>
        <AIChatbot />
      </div>
    );
  }

  if (isEmergencyPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <EmergencyRepairsPage onBack={navigateHome} />
        </main>
        <AIChatbot />
      </div>
    );
  }

  if (isServiceAreaPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <ServiceAreaPage onBack={navigateHome} />
        </main>
        <AIChatbot />
      </div>
    );
  }

  if (isWaterHeaterPage) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <WaterHeaterPage onBack={navigateHome} />
        </main>
        <AIChatbot />
      </div>
    );
  }

  if (currentDrainLocation) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <CityDrainCleaningPage location={currentDrainLocation} onBack={navigateHome} />
        </main>
        <AIChatbot />
      </div>
    );
  }

  if (currentPlumberLocation) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <CityPlumberPage location={currentPlumberLocation} onBack={navigateHome} />
        </main>
        <AIChatbot />
      </div>
    );
  }

  if (currentLocation) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <LocationServicePage location={currentLocation} onBack={navigateHome} />
        </main>
        <AIChatbot />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Trust Bar */}
        <section className="bg-white py-12 border-b border-gray-100" aria-label="Certifications and Trust">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              <div className="flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <i className="fa-solid fa-award text-3xl text-blue-600"></i>
                <span className="font-bold text-xl tracking-tighter">BBB ACCREDITED</span>
              </div>
              <div className="flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <i className="fa-solid fa-house-shield text-3xl text-blue-600"></i>
                <span className="font-bold text-xl tracking-tighter">INSURED PLUMBING</span>
              </div>
              <div className="flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <i className="fa-solid fa-user-check text-3xl text-blue-600"></i>
                <span className="font-bold text-xl tracking-tighter">LICENSE #PL-2008</span>
              </div>
              <div className="flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                <i className="fa-brands fa-google text-3xl text-blue-600"></i>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-xs">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="font-bold text-sm tracking-tighter">4.9 STAR REVIEWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        <About />

        <ServiceMap />

        {/* Testimonials */}
        <section id="reviews" className="py-24 bg-blue-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">What Our Customers Say</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((review, index) => (
                <AnimatedTestimonialCard key={review.id} review={review} index={index} />
              ))}
            </div>
            
            <div className="mt-20 flex justify-center">
              <a href="https://google.com" className="text-white font-bold border-b-2 border-blue-500 pb-1 hover:text-blue-400 hover:border-blue-400 transition-all duration-300">
                Read all 250+ Google Reviews
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="bg-blue-950 text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg cursor-pointer" onClick={navigateHome}>
                  <i className="fa-solid fa-faucet-drip text-white text-xl"></i>
                </div>
                <span className="text-2xl font-extrabold tracking-tight cursor-pointer" onClick={navigateHome}>
                  AARDEE<span className="text-blue-500">PLUMBING</span>
                </span>
              </div>
              <p className="text-blue-200/60 leading-relaxed mb-8">
                Professional, licensed plumbing services you can rely on. Serving Baldwin County with pride since 2008.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/40 hover:text-white transition-colors text-xl" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="text-white/40 hover:text-white transition-colors text-xl" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="text-white/40 hover:text-white transition-colors text-xl" aria-label="Google"><i className="fa-brands fa-google"></i></a>
              </div>
            </div>

            <nav aria-label="Footer Services Navigation">
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-400">Services</h4>
              <ul className="space-y-4 text-blue-200/60 font-medium">
                <li><a href="#/emergency-repairs" className="hover:text-blue-400 transition-colors">Emergency Repair</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Drain Cleaning</a></li>
                <li><a href="#/water-heaters" className="hover:text-blue-400 transition-colors">Water Heaters</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Gas Lines</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sewer Repair</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Whole House Repiping</a></li>
              </ul>
            </nav>

            <nav aria-label="Footer Area Navigation">
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-400">Areas We Serve</h4>
              <ul className="space-y-4 text-blue-200/60 font-medium">
                {CITIES.map(city => (
                  <li key={city.slug}>
                    <a href={`#/emergency-repairs-${city.slug}`} className="hover:text-blue-400 transition-colors">
                      Plumbing in {city.city}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div aria-label="Operating Hours">
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-blue-400">Working Hours</h4>
              <ul className="space-y-4 text-blue-200/60 font-medium">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00am - 6:00pm</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>9:00am - 4:00pm</span></li>
                <li className="flex justify-between text-blue-400 font-bold"><span>Sunday:</span> <span>EMERGENCY ONLY</span></li>
                <li className="pt-4 flex items-center text-white">
                  <i className="fa-solid fa-clock mr-2 text-blue-600"></i>
                  <span>24/7 Emergency Response</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200/40 font-medium">
            <p>© {new Date().getFullYear()} Aardee Plumbing. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
};

export default App;
