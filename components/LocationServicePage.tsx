import React, { useEffect } from 'react';
import { LocationService } from '../types';

interface LocationServicePageProps {
  location: LocationService;
  onBack: () => void;
}

const LocationServicePage: React.FC<LocationServicePageProps> = ({ location, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Map slugs to city-specific SEO content blocks
  const getCityContent = (slug: string) => {
    switch (slug) {
      case 'foley':
        return {
          img1: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
          img2: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800",
          highlights: [
            { title: "Rapid Response in Foley Proper", desc: "Our HQ is right here in Foley, allowing us to hit your driveway in under 20 minutes for most emergencies near the Pride of the South." },
            { title: "Hard Water Solutions", desc: "Foley's water mineral content can be tough on pipes. We specialize in descaling and corrosion repair for local homes." },
            { title: "New Development Expertise", desc: "Whether you're in a historic downtown cottage or a brand new subdivision near OWA, we know your plumbing layout." }
          ],
          paragraphs: [
            "Foley, Alabama is a unique place to live, and with that comes unique plumbing challenges. From the high humidity of the Gulf Coast to the specific mineral content in our local water supply, your home's pipes face a lot of stress. Our team has spent over 15 years servicing the homes in Foley, giving us unparalleled insight into the common failures found in both historic Foley bungalows and the newest developments. We aren't just a big-box plumbing franchise; we are your neighbors.",
            "When you call us for an emergency repair in Foley, you're getting a technician who knows the area, understands the local building codes inside and out, and cares about the quality of life in our community. We handle everything from slab leaks caused by shifting sandy soil to water heater explosions that threaten your floorboards. Our 'Warehouse on Wheels' is always nearby, stocked with every coupling, valve, and tool needed to stop the water and start the restoration.",
            "Our commitment to Foley goes beyond just fixing leaks. We are proud supporters of local events and schools. When you support us, you're supporting a business that truly lives and works right here in South Alabama. We are fully bonded and carry extensive insurance coverage for your total protection. Don't trust your home's most vital systems to a handyman—call the experts at Aardee Plumbing for master-level results that last for years to come."
          ]
        };
      case 'gulf-shores':
        return {
          img1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
          img2: "https://images.unsplash.com/photo-1517646281553-9b935c3a2d85?auto=format&fit=crop&q=80&w=800",
          highlights: [
            { title: "Salt-Air Corrosion Specialists", desc: "The coastal air in Gulf Shores is brutal on metal fixtures. We use high-grade anti-corrosive materials for all beach-front repairs." },
            { title: "Vacation Rental Priority", desc: "For property managers on West Beach Blvd, we offer priority 24/7 service to ensure your guests never have a ruined vacation due to a leak." },
            { title: "Sand-in-Line Removal", desc: "Beach life means sand in the drains. Our hydro-jetting equipment is specifically tuned to clear sand and sediment from coastal lines." }
          ],
          paragraphs: [
            "Living in Gulf Shores means enjoying the beautiful Alabama coast, but it also means dealing with plumbing issues unique to a high-salt, sandy environment. Salt-air corrosion can eat away at exposed pipes and fixtures faster than anywhere else in the state. At Aardee Plumbing, we specialize in coastal-ready plumbing solutions. We understand the urgency of a vacation rental with a clogged main line or a condo with a leaking water heater—these aren't just inconveniences; they are lost revenue.",
            "Our emergency response team is accustomed to navigating the traffic on Highway 59 and the Beach Express to reach you quickly. We provide specialized services for stilt-homes, high-rise condos, and legacy beach cottages. Whether it's an emergency pipe burst under the house or a complex sewer backup near Little Lagoon, our technicians have the specific local knowledge required to fix it right the first time without the guesswork.",
            "We also work closely with Gulf Shores property management companies to provide seamless, hands-off emergency repairs. We document everything with photos and clear invoices so you can stay in the loop without having to leave your office. Don't let a plumbing disaster wash away your peace of mind. Call the coastal experts at Aardee Plumbing and get back to enjoying the sugar-white sands while we handle the dirty work below the surface."
          ]
        };
      case 'orange-beach':
        return {
          img1: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800",
          img2: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
          highlights: [
            { title: "Condo & High-Rise Mastery", desc: "Emergency leaks in Orange Beach high-rises can affect multiple floors. We specialize in rapid shut-off and containment for multi-unit buildings." },
            { title: "Dockside Plumbing Repair", desc: "Serving marinas and boat docks with specialized plumbing solutions that stand up to the brackish water and tide changes." },
            { title: "Heavy Tourist Load Experts", desc: "During peak season, Orange Beach systems take a beating. We provide emergency clearing for high-traffic commercial and residential systems." }
          ],
          paragraphs: [
            "Orange Beach is the crown jewel of the Alabama coast, and its plumbing systems are some of the most complex in the region. Between the sprawling luxury condos and the massive marinas at The Wharf and Bear Point, there is no room for amateur plumbing work. Aardee Plumbing is the first choice for Orange Beach residents who need an emergency plumber who understands the stakes. A leak on the 10th floor of a Gulf-front condo can cause hundreds of thousands in damage in under an hour.",
            "We are equipped with specialized diagnostic tools for high-rise buildings, including ultra-sonic leak detection and thermal imaging to find water movement behind walls without unnecessary demolition. Our emergency crews are on-call 24/7, ready to navigate Canal Road or Perdido Beach Blvd at a moment's notice. We don't just fix the leak; we coordinate with building maintenance to ensure the entire system is stable and secure.",
            "For our neighbors in the marinas, we offer specialized dockside plumbing repairs that account for the unique environmental stressors of Terry Cove and the Intracoastal Waterway. We use marine-grade fixtures and specialized piping that resists the 'sweating' and corrosion typical of the Orange Beach climate. Trust your high-end Orange Beach property to the master plumbers who understand the luxury and the complexity of your home's vital systems."
          ]
        };
      case 'silverhill':
        return {
          img1: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
          img2: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
          highlights: [
            { title: "Well System Emergency Care", desc: "Many Silverhill homes rely on wells. We offer 24/7 emergency pump repair and pressure tank service to restore your water fast." },
            { title: "Septic System Expertise", desc: "When your septic line backs up in Silverhill, you need immediate help. We provide emergency clearing and baffle repair to prevent yard contamination." },
            { title: "Rural Response Gaurantee", desc: "Just because you're out in the country doesn't mean you should wait. We prioritize our Silverhill calls with dedicated rural dispatch." }
          ],
          paragraphs: [
            "Silverhill is known for its historic charm and peaceful rural living, but those 'out of town' benefits often come with specialized plumbing systems. Many residents in the Silverhill area rely on private wells and septic systems rather than municipal lines. When your well pump fails at midnight, or your septic line backs up after a heavy rain, you can't just call any plumber—you need an expert who understands rural Alabama infrastructure. Aardee Plumbing is that expert.",
            "We have years of experience servicing the deep wells and sprawling septic layouts found throughout Silverhill. We carry emergency well pumps and pressure switches on our trucks, often allowing us to restore water service to your home in a single visit. We understand that water is a lifeline for our Silverhill neighbors, and we treat every call with the urgency it deserves. Our technicians are trained to troubleshoot complex electrical-to-plumbing interfaces that are common in well systems.",
            "Whether you're located near the Heritage Museum or out toward the edges of town, our team is ready to provide master-level service with a small-town heart. We take pride in our honest, upfront pricing—we'll never take advantage of an emergency situation. We live and work in Baldwin County, and we treat every Silverhill home like it belongs to family. Call us today for emergency plumbing that combines big-city technology with honest, rural Alabama values."
          ]
        };
      case 'fairhope':
        return {
          img1: "https://images.unsplash.com/photo-1518173946687-a4c8a9833786?auto=format&fit=crop&q=80&w=800",
          img2: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800",
          highlights: [
            { title: "Historic Pipe Preservation", desc: "Fairhope is full of beautiful, older homes. We specialize in emergency repairs that preserve historic integrity without damaging aged structures." },
            { title: "Upscale Fixture Repair", desc: "Fairhope homes often feature high-end European or custom fixtures. Our team is trained to handle and repair luxury plumbing brands with care." },
            { title: "Bay-Front Drainage Experts", desc: "With the slope toward Mobile Bay, Fairhope homes face unique drainage pressure. We provide emergency solutions for run-off and line stress." }
          ],
          paragraphs: [
            "Fairhope, Alabama is a town of unmatched beauty and history, but its older plumbing systems can be a source of constant stress for homeowners. Many of the most beautiful homes near the Fairhope Pier or along the Bluff feature original cast iron or galvanized pipes that are reaching the end of their lifespan. When one of these legacy pipes fails, you don't need a plumber who will just 'patch and go'—you need a craftsman who understands the delicate nature of historic Fairhope architecture.",
            "At Aardee Plumbing, we combine modern technology with old-world respect for craftsmanship. We use non-invasive camera inspections to locate blockages in historic lines, minimizing the need to cut into your beautiful plaster walls or original hardwood floors. Our emergency response team is highly trained in the handling of high-end fixtures and delicate pipe materials. Whether it's a sudden basement flood or a sewer smell in your historic bungalow, we bring a level of professionalism that Fairhope expects.",
            "We also understand the unique soil conditions and drainage challenges of the 'Jubilee City' area. Shifting clay near the bay can cause pipes to snap or belly, leading to sudden, catastrophic backups. Our emergency hydro-jetting and trenchless repair options mean we can fix your problem without destroying your meticulously manicured Fairhope landscape. Trust your piece of Alabama paradise to the plumbing experts who appreciate Fairhope's history as much as you do."
          ]
        };
      case 'daphne':
        return {
          img1: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
          img2: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
          highlights: [
            { title: "Sewer Line Specialists", desc: "The hilly terrain in Daphne can cause sewer line stress. We offer 24/7 emergency camera scoping and clearing for all Daphne neighborhoods." },
            { title: "Storm Surge Protection", desc: "Many Daphne homes are at risk during coastal storms. We install and repair emergency backflow preventers to keep your home safe." },
            { title: "Family-Priority Scheduling", desc: "Daphne is a town of families. We prioritize emergencies in homes with children and elderly residents to ensure your health and safety." }
          ],
          paragraphs: [
            "Daphne is one of the fastest-growing cities in Alabama, and its plumbing infrastructure is a mix of reliable old systems and brand new developments. The hilly terrain of the Jubilee City presents a specific set of challenges for sewer lines and water pressure. High-pressure water lines feeding the higher elevations of Daphne can lead to pipe bursts if pressure regulators fail. At Aardee Plumbing, we have the specialized gauges and diagnostic tools to solve these 'hillside' plumbing mysteries fast.",
            "Our emergency plumbers are familiar with every neighborhood in Daphne, from Lake Forest to the bay-front estates. We understand that a plumbing emergency in a busy Daphne household isn't just a leak—it's a complete disruption of your family's life. That's why we offer rapid 24/7 dispatch with a focus on 'First-Visit Fixes.' We carry a massive inventory of parts on our trucks specifically chosen for the common pipe types and fixtures found in Daphne homes built over the last 40 years.",
            "Beyond emergency repairs, we are dedicated to the long-term health of Daphne's plumbing. We offer emergency water heater replacements for those cold-morning surprises and high-speed drain cleaning for the kitchen clogs that happen during holiday gatherings. Our master-licensed technicians are fully insured and bonded, providing the professional peace of mind that Daphne families deserve. When the water won't stop or the drain won't go, call the plumber that Daphne trusts most: Aardee Plumbing."
          ]
        };
      default:
        return null;
    }
  };

  const cityData = getCityContent(location.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* City Specific Hero - THEMED RED FOR EMERGENCY */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center overflow-hidden bg-red-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={cityData?.img1 || "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=2000"} 
            alt={`Emergency Plumbing Service in ${location.city}`}
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
              24/7 Priority Emergency Dispatch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Emergency Plumbing <br/>in <span className="text-red-500">{location.city}, AL</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl leading-relaxed">
              Facing a plumbing crisis in {location.city}? Our master plumbers are on standby to restore your home and peace of mind with record-breaking dispatch times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:2517650333" 
                className="bg-red-600 hover:bg-red-700 text-white text-2xl font-black px-10 py-5 rounded-2xl flex items-center justify-center space-x-4 shadow-2xl shadow-red-600/30 transition-all transform hover:scale-105 active:scale-95"
              >
                <i className="fa-solid fa-phone-volume animate-shake"></i>
                <span>(251) 765-0333</span>
              </a>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.5)]"></div>
                <span className="text-white font-bold">Local {location.city} Crew On Duty Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Local Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-blue-900 mb-8 uppercase tracking-tight">Rapid Emergency Response for {location.city}</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Aardee Plumbing, we understand that plumbing emergencies don't wait for convenient business hours. That's why we've strategically positioned our service vehicles throughout <strong>{location.city}</strong> to ensure we can reach you in record time. We know every landmark and shortcut in the {location.city} area, from the major highways to the quietest residential lanes.
                </p>
                <p>
                  Whether it's a burst pipe flooding your kitchen, a severe sewer backup, or a water heater failure right before a big event, we bring industrial-grade equipment and master-level expertise directly to your doorstep. Our trucks are essentially mobile warehouses, stocked with hundreds of common parts and cutting-edge diagnostic tools.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    `Priority dispatch for all ${location.city} residents`,
                    'Transparent, flat-rate pricing—no emergency surprises',
                    'Master licensed & fully bonded technicians',
                    'Immaculate cleanup guarantee on every visit'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-blue-900 font-bold">
                      <i className="fa-solid fa-circle-check text-green-500"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-red-50 rounded-[3rem] p-10 md:p-16 border border-red-100 shadow-xl">
              <h3 className="text-3xl font-black text-red-900 mb-8">Schedule Priority Repair</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-white border border-red-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-red-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-red-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500" />
                <textarea rows={4} placeholder="Describe your emergency..." className="w-full bg-white border border-red-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                <button className="w-full bg-red-600 text-white font-black py-5 rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-200">
                  REQUEST EMERGENCY DISPATCH
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded SEO Content */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 mb-20 items-center">
              <div className="md:w-1/2">
                <img 
                  src={cityData?.img1 || "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"} 
                  alt="Modern plumbing diagnostic tools" 
                  className="rounded-[2.5rem] shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-black text-red-900 mb-6 uppercase">Why {location.city} Neighbors Choose Us</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {cityData?.paragraphs[0]}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {cityData?.paragraphs[1]}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-6 uppercase tracking-tight">Specialized {location.city} Emergency Solutions</h3>
                <div className="space-y-8">
                  {cityData?.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-shield-heart"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">{highlight.title}</h4>
                        <p className="text-gray-600">{highlight.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={cityData?.img2 || "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=800"} 
                  alt="Aardee Plumbing technician at work" 
                  className="rounded-[2.5rem] shadow-2xl w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
                  <p className="text-xs font-black text-red-600 uppercase mb-2">Priority Dispatch</p>
                  <p className="text-xs text-gray-500 italic">"We handle every {location.city} emergency with the urgency of our own home's plumbing."</p>
                </div>
              </div>
            </div>

            <div className="bg-red-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">Master Level Expertise in {location.city}</h3>
                <p className="text-red-100 text-lg leading-relaxed mb-8">
                  {cityData?.paragraphs[2]}
                </p>
                <div className="flex flex-wrap gap-12">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-double text-red-400"></i>
                    <span className="font-bold">A+ BBB Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-double text-red-400"></i>
                    <span className="font-bold">Master Licensed #XYZABC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-double text-red-400"></i>
                    <span className="font-bold">5-Star Coastal Reviews</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-800 rounded-full blur-[100px] opacity-20 -mr-48 -mt-48"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Review Section */}
      <section className="py-24 bg-red-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 italic">"The fastest emergency service I've ever seen in {location.city}."</h2>
          <div className="flex flex-col items-center">
            <div className="flex text-yellow-400 text-2xl mb-4">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-xl font-bold mb-10">Rated 4.9/5 by {location.city} Neighbors</p>
            <a href="tel:2517650333" className="text-red-400 text-3xl font-black border-b-4 border-red-400 pb-2 hover:text-white hover:border-white transition-all">
              Call (251) 765-0333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationServicePage;