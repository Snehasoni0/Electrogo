"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Wind, ShieldCheck, Users, ArrowRight } from 'lucide-react';

const BusServiceHero = () => {
  return (
    <section className="relative h-screen w-full bg-[#0d1117] flex items-center justify-center overflow-hidden font-sans">
      
      {/* 1. INDUSTRIAL BACKGROUND WITH GRAY OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop" 
          alt="Electric Transit Hub"
          className="w-full h-full object-cover grayscale brightness-[0.3]"
        />
        {/* Tactical Gray/Navy Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
        
        {/* Subtle Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950" />
      </div>

      {/* 2. CENTERED COMMAND CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        

        {/* H1: Mass Transit Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.85]"
        >
          Clean Mass <br />
          Transit for <br />
          <span className="text-lime-500 not-italic">Smart Cities.</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Silent, air-conditioned, and <span className="text-white">zero-emission solutions</span> for Rajasthan’s urban and inter-city connectivity.
        </motion.p>

        {/* Technical Specs Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-10 md:gap-16 border-t border-white/5 pt-10"
        >
          {[
            { label: "Silent Operation", icon: <Wind size={18} /> },
            { label: "40+ Passenger Cap", icon: <Users size={18} /> },
            { label: "Real-time Telemetry", icon: <ShieldCheck size={18} /> }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-lime-500">{item.icon}</div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <button className="group px-12 py-5 bg-lime-500 text-black font-black uppercase italic tracking-widest text-xs rounded-2xl transition-all hover:bg-lime-400 hover:shadow-[0_0_50px_rgba(163,230,53,0.3)] flex items-center">
            Procurement Briefing
            <Bus size={18} />
          </button>
        </motion.div>
      </div>

      {/* Decorative Corner Markers */}
      <div className="absolute top-10 left-10 w-24 h-24 border-l-2 border-t-2 border-white/5 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 border-white/5 pointer-events-none" />
      
    </section>
  );
};

export default BusServiceHero;