"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Building2, Car, MapPin, Send, ChevronDown, Loader2 } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LeadFormSection = () => {
  const [interest, setInterest] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    
    // Construct payload for the "leads" tab
    const payload = {
      sheetName: "leads",
      interest: interest,
      name: formData.get('name'),
      phone: formData.get('phone'),
      sqft: formData.get('sqft') || "N/A",
      city: formData.get('city') || "N/A",
      company: formData.get('company') || "N/A",
      km: formData.get('km') || "N/A",
    };

    try {
      // Use your deployed Google Apps Script URL here
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyA_3ZZk2tzFd6upSy-MLytpWLvXDkhjWWdGqmXBiVoYamM4BiS3t56RhPcPa_KHa-HhA/exec";

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      toast.success("Partnership Protocol Initiated. Our executive team will reach out.", {
        position: "top-right",
        theme: "dark",
        style: { border: '1px solid #a3e635', color: '#fff', background: '#020617', fontFamily: 'monospace' }
      });

      e.target.reset();
      setInterest('');
    } catch (error) {
      toast.error("TRANSMISSION FAILED. CHECK CONNECTION.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gray-950 py-16 md:py-24 px-6 md:px-24 overflow-hidden selection:bg-lime-400">
      <ToastContainer />
      
      {/* ROW 1: HEADINGS */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <Zap size={16} className="text-lime-400 fill-lime-400" />
          <span className="text-lime-400 font-mono text-xs font-black uppercase tracking-[0.3em]">Direct Integration</span>
        </motion.div>
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
          Secure Your <br />
          <span className="text-transparent outline-text opacity-20">Partnership.</span>
        </h2>
      </div>

      {/* ROW 2: 2-COLUMN GRID */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* COLUMN 1: DYNAMIC FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full bg-gray-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative border border-gray-800"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-lime-400 rounded-full blur-[120px] opacity-10" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="space-y-3">
              <label className="text-lime-400 font-mono text-[10px] font-black uppercase tracking-widest">
                01. I am interested in...
              </label>
              
              <div className="relative">
                <select 
                  name="interest"
                  required
                  onFocus={() => setIsDropdownOpen(true)}
                  onBlur={() => setIsDropdownOpen(false)}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl px-6 py-4 focus:outline-none focus:border-lime-400 transition-all appearance-none cursor-pointer relative z-10"
                >
                  <option value="">Select Path</option>
                  <option value="charger">Hosting a Charger</option>
                  <option value="corporate">Corporate Fleet</option>
                  <option value="driving">Driving with Us</option>
                </select>

                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-gray-500"
                >
                  <ChevronDown size={20} className={isDropdownOpen ? "text-lime-400" : "text-gray-500"} />
                </motion.div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {interest === 'charger' && (
                <motion.div 
                  key="charger"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="sqft" required placeholder="Location Size (Sq Ft)" className="bg-gray-950 border border-gray-800 text-white rounded-xl px-6 py-4 focus:border-lime-400 outline-none placeholder:text-gray-600 w-full" />
                    <input name="city" required placeholder="City (e.g. Jaipur, Ajmer)" className="bg-gray-950 border border-gray-800 text-white rounded-xl px-6 py-4 focus:border-lime-400 outline-none placeholder:text-gray-600 w-full" />
                  </div>
                </motion.div>
              )}

              {interest === 'corporate' && (
                <motion.div 
                  key="corporate"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <input name="company" required placeholder="Department/Company Name" className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl px-6 py-4 focus:border-lime-400 outline-none placeholder:text-gray-600" />
                  <input name="km" required placeholder="Monthly KM Requirement" className="w-full bg-gray-950 border border-gray-800 text-white rounded-xl px-6 py-4 focus:border-lime-400 outline-none placeholder:text-gray-600" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full Name" className="bg-gray-950 border border-gray-800 text-white rounded-xl px-6 py-4 focus:border-lime-400 outline-none placeholder:text-gray-600 w-full" />
              <input name="phone" required placeholder="Phone Number" className="bg-gray-950 border border-gray-800 text-white rounded-xl px-6 py-4 focus:border-lime-400 outline-none placeholder:text-gray-600 w-full" />
            </div>

            <motion.button 
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full bg-lime-400 hover:bg-lime-300 text-gray-950 font-black uppercase tracking-[0.2em] text-xs italic py-5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <>
                  Secure My Partnership 
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* COLUMN 2: STRATEGIC TEXT */}
        <div className="flex flex-col justify-center space-y-10 lg:h-full">
          <div className="space-y-6 border-l-2 border-lime-400 pl-8">
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-none">
              Rajasthan EV Expansion <br />
              <span className="text-lime-400">Phase II Core.</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
              We are scaling the Jaipur-Ajmer-Jodhpur highway network. Secure your integration into Rajasthan's advanced executive transit and charging infrastructure ahead of the April 2026 rollout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:text-gray-950 transition-all">
                <Building2 size={20} />
              </div>
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">B2G Protocols</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:text-gray-950 transition-all">
                <Car size={20} />
              </div>
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Fleet Ready</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:text-gray-950 transition-all">
                <MapPin size={20} />
              </div>
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Strategic Hubs</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #fff;
        }
        @media (max-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 1px #fff;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadFormSection;