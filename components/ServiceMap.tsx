
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { CITIES } from '../constants';

const ServiceMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Coordinates for Foley, AL (HQ)
      const foleyCoords: [number, number] = [30.4066, -87.6836];
      
      // Initialize map
      mapInstance.current = L.map(mapRef.current, {
        center: [30.48, -87.75], // Slightly north to center the group
        zoom: 10,
        scrollWheelZoom: false,
      });

      // Add clean tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapInstance.current);

      // Custom icon for markers
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // Define broad service area circle (Baldwin County)
      L.circle(foleyCoords, {
        color: '#1e3a8a', // Darker blue boundary
        fillColor: '#1e40af',
        fillOpacity: 0.03,
        radius: 40000, 
        weight: 1,
        dashArray: '5, 10',
        interactive: false
      }).addTo(mapInstance.current);

      // Coordinate mapping for CITIES
      const cityCoordinates: Record<string, [number, number]> = {
        'foley': [30.4066, -87.6836],
        'gulf-shores': [30.2460, -87.7008],
        'orange-beach': [30.2821, -87.5753],
        'silverhill': [30.5449, -87.7564],
        'fairhope': [30.5230, -87.9033],
        'daphne': [30.6035, -87.9036]
      };

      // Add markers and highlight circles for each city
      CITIES.forEach(city => {
        const coords = cityCoordinates[city.slug];
        if (coords) {
          // Highlight circle per city
          L.circle(coords, {
            color: '#3b82f6',
            fillColor: '#60a5fa',
            fillOpacity: 0.15,
            radius: 4500, 
            weight: 0,
          }).addTo(mapInstance.current!);

          // Marker
          const marker = L.marker(coords, { icon: customIcon })
            .addTo(mapInstance.current!);
            
          // Enhanced Popup
          const popupContent = `
            <div class="font-sans min-w-[200px]">
              <div class="flex items-center space-x-2 mb-2">
                <div class="bg-blue-100 p-1 rounded text-blue-600"><i class="fa-solid fa-map-pin"></i></div>
                <h3 class="font-bold text-base text-blue-900 m-0">${city.city}</h3>
              </div>
              <p class="text-xs text-gray-600 leading-relaxed mb-3">${city.description}</p>
              <a href="#/emergency-repairs-${city.slug}" 
                 class="block w-full text-center bg-blue-600 !text-white text-xs font-bold py-2 rounded hover:bg-blue-700 transition-colors shadow-md">
                 View ${city.city} Services
              </a>
            </div>
          `;
          
          marker.bindPopup(popupContent);
        }
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="service-area" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 order-2 lg:order-1">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Service Area</h2>
            <h3 className="text-4xl font-black text-blue-900 mb-6">Covering All Of Baldwin County.</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We provide prompt, professional plumbing services across the entire Alabama Gulf Coast. Our strategic location in Foley allows us to reach most customers in under 60 minutes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <i className="fa-solid fa-location-dot text-blue-600 text-xl"></i>
                <div>
                  <h4 className="font-bold text-blue-900">Headquarters</h4>
                  <p className="text-sm text-gray-500">Foley, AL 36535</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {CITIES.map(city => (
                  <div key={city.slug} className="flex items-center space-x-2 text-gray-700 text-sm font-medium">
                    <i className="fa-solid fa-check text-blue-500 text-[10px]"></i>
                    <span>{city.city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="tel:2517650333" 
                className="inline-flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                <i className="fa-solid fa-headset"></i>
                <span>Check Coverage</span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative order-1 lg:order-2 w-full z-0">
            <div ref={mapRef} className="w-full h-full"></div>
            {/* Legend Overlay */}
            <div className="absolute top-6 right-6 z-[1000] bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-4 h-4 rounded-full border border-blue-600 bg-blue-100/50"></div>
                <span className="text-xs font-bold text-gray-700">Service Radius</span>
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-4 h-4 rounded-full bg-blue-400 opacity-50"></div>
                <span className="text-xs font-bold text-gray-700">Priority Zone</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-sm"></div>
                <span className="text-xs font-bold text-gray-700">Dispatch Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
