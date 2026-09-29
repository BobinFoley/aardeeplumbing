import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white">
          <div className="lg:w-1/2 p-10 md:p-16 bg-blue-900 text-white">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl font-black mb-8">Ready to start your project?</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-xl">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-70 uppercase tracking-wider">Call Us 24/7</p>
                  <p className="text-2xl font-bold">(251) 765-0333</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-70 uppercase tracking-wider">Email Us</p>
                  <p className="text-2xl font-bold">service@aardeeplumbing.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-70 uppercase tracking-wider">Our Office</p>
                  <p className="text-2xl font-bold">Foley, AL 36535</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fa-brands fa-google"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-10 md:p-16">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Request Received!</h3>
                <p className="text-gray-600 text-lg">Thank you for reaching out. One of our specialists will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Full Name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Phone</label>
                    <input 
                      required
                      type="tel" 
                      pattern="^(\+?1[ -]?)?\(?[0-9]{3}\)?[ -]?[0-9]{3}[ -]?[0-9]{4}$"
                      title="Please enter a valid US phone number (e.g., (555) 555-5555)"
                      placeholder="(XXX) XXX-XXXX"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Service Needed</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option>General Plumbing Repair</option>
                    <option>Emergency Service</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater Installation</option>
                    <option>Gas Line Service</option>
                    <option>Whole House Repiping</option>
                    <option>Commercial Plumbing</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your plumbing issue..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white font-black text-xl py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                >
                  SEND REQUEST
                </button>
                <p className="text-center text-sm text-gray-500">
                  <i className="fa-solid fa-lock mr-2"></i>
                  Your data is 100% secure and private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;