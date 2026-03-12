"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Zap } from 'lucide-react';

const CityEVHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306802/photo-1642665057087-8d12575e0a00_jx1uvn.jpg" 
          alt="Premium Electric Sedan"
          className="w-full h-full object-cover grayscale brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-transparent to-[#0d1117]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9]"
        >
          Your Premium, <br />
          <span className="text-transparent stroke-text">Silent,</span> & <span className="text-lime-500">Green</span> <br />
          City Ride.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-slate-300 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          High-end electric hatchbacks and sedans for daily travel in <br />
          <span className="text-white font-bold">Jaipur • Jodhpur • Udaipur.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <button className="group cursor-pointer relative px-6 py-5 bg-lime-500 text-black font-black uppercase italic tracking-widest text-sm rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(163,230,53,0.4)] flex items-center gap-3 mx-auto">
            Join the Waitlist for April 2026
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Scroll Down</span>
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0d1117] to-transparent z-[5]" />
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
      `}</style>
    </section>
  );
};

export default CityEVHero;