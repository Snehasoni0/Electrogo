"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Zap, Shield, ArrowLeft, ArrowRight, Gauge } from 'lucide-react';

const FleetShowcase = () => {
  const [index, setIndex] = useState(0);

  const fleet = [
    {
      name: "Tata Nexon EV",
      tier: "Executive Class",
      tagline: "The Protocol Standard",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80", 
      specs: { range: "453 KM", safety: "5-Star GNCAP", power: "143 PS" }
    },
    {
      name: "MG ZS EV",
      tier: "Premium Protocol",
      tagline: "Diplomatic Endurance",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80",
      specs: { range: "461 KM", safety: "ASIL-K Certified", power: "176 PS" }
    },
    {
      name: "BYD Atto 3",
      tier: "Diplomatic Suite",
      tagline: "Blade Battery Tech",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80",
      specs: { range: "521 KM", safety: "Level 2 ADAS", power: "204 PS" }
    }
  ];

  const next = () => setIndex((prev) => (prev + 1) % fleet.length);
  const prev = () => setIndex((prev) => (prev - 1 + fleet.length) % fleet.length);

  return (
    <section className="relative h-screen w-full bg-gray-950 flex flex-col overflow-hidden font-sans">
      
      {/* 1. TACTICAL HEADER */}
      <div className="z-20 flex justify-between items-center px-6 md:px-12 pt-8 border-b border-white/5 bg-gray-950/50 backdrop-blur-md">
        <div className="flex flex-col">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "3rem" }} 
            className="h-1 bg-lime-500 mb-2" 
          />
          <span className="text-lime-500 font-mono text-[9px] font-black uppercase tracking-[0.4em]">
            Asset_Class: EV_Fleet_0{index + 1}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
            The <span className="text-lime-500 not-italic">Elite</span> Selection.
          </h2>
        </div>
        
        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-6">
           <div className="h-1 w-24 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: index * 100 + "%" }}
                className="h-full w-1/3 bg-lime-500" 
              />
           </div>
           <div className="flex gap-2">
             <button onClick={prev} className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all">
               <ArrowLeft size={18} className="text-white" />
             </button>
             <button onClick={next} className="p-3 bg-lime-500 text-black rounded-xl hover:bg-lime-400 transition-all">
               <ArrowRight size={18} />
             </button>
           </div>
        </div>
      </div>

      {/* 2. MAIN VIEWPORT */}
      <div className="flex-grow flex flex-col md:grid md:grid-cols-12 relative">
        
        {/* Left: Metadata Panel */}
        <div className="md:col-span-4 flex flex-col justify-center px-6 md:px-12 py-10 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={fleet[index].name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="space-y-8"
            >
              <div>
                <span className="text-lime-500 font-mono text-[10px] font-bold uppercase tracking-widest bg-lime-500/10 px-2 py-1 rounded">
                  {fleet[index].tier}
                </span>
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.8] mt-6 tracking-tighter">
                  {fleet[index].name}
                </h3>
                <p className="text-gray-500 font-bold text-xs uppercase mt-4 tracking-widest">
                  // {fleet[index].tagline}
                </p>
              </div>

              {/* Technical Specs */}
              <div className="space-y-3">
                {[
                  { label: "Mission Range", val: fleet[index].specs.range, icon: <Zap size={14} /> },
                  { label: "Safety Rating", val: fleet[index].specs.safety, icon: <Shield size={14} /> },
                  { label: "Engine Power", val: fleet[index].specs.power, icon: <Gauge size={14} /> }
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl group hover:border-lime-500/30 transition-all">
                    <div className="flex items-center gap-3 text-gray-400">
                      <div className="text-lime-500 group-hover:scale-110 transition-transform">{s.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-tighter">{s.label}</span>
                    </div>
                    <span className="text-sm font-black text-white uppercase italic">{s.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: The Machine Stage */}
        <div className="md:col-span-8 relative flex items-center justify-center p-6 overflow-hidden">
          
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[80%] bg-lime-500/5 rounded-full blur-[120px] animate-pulse" />
          </div>

          {/* Large Watermark */}
          <span className="absolute bottom-10 right-10 text-[12vw] font-black text-white/[0.02] uppercase italic select-none pointer-events-none">
            EV-OFFICIAL
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={fleet[index].name}
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="relative z-10 w-full flex items-center justify-center"
            >
              <div className="relative group">
                <img 
                  src={fleet[index].image} 
                  alt={fleet[index].name}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-white/10"
                />
                {/* Image Reflection Overlay */}
                <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="md:hidden absolute bottom-10 flex gap-4 z-30">
             <button onClick={prev} className="p-4 bg-gray-900 border border-white/10 text-white rounded-2xl active:scale-95">
               <ArrowLeft size={20} />
             </button>
             <button onClick={next} className="p-4 bg-lime-500 text-black rounded-2xl active:scale-95">
               <ArrowRight size={20} />
             </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0);
          background-size: 32px 32px;
        }
      `}</style>
    </section>
  );
};

export default FleetShowcase;