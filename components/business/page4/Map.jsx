"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Compass, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

const RouteRoadmapSplit = () => {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row bg-white overflow-hidden font-sans">
      
      {/* 1. PHASE 01: THE INTER-CITY SPINE (Left Side) */}
      <motion.div 
        whileHover={{ flex: 1.2 }}
        className="relative flex-1 bg-slate-900 group transition-all duration-700 ease-in-out border-r border-white/5 overflow-hidden"
      >
        {/* Background Texture/Image */}
        <div className="absolute inset-0 opacity-20 grayscale group-hover:scale-110 transition-transform duration-[10s]">
          <img 
            src="https://images.unsplash.com/photo-1545147986-a9d6f210df77?q=80&w=1000&auto=format&fit=crop" 
            alt="Highway" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Phase Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-12 md:p-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-lime-500 font-mono text-xs font-black uppercase tracking-[0.4em]">Phase 01</span>
              <div className="h-px w-12 bg-lime-500/30" />
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
              Inter-City <br />
              <span className="text-lime-500 not-italic">Spine.</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg max-w-md leading-relaxed">
              Connecting Jodhpur to Jaipur. High-speed, high-frequency transit across the state's economic corridor.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-10">
              <div>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Backbone Route</p>
                <p className="text-white font-bold uppercase italic text-sm">JDH — AJM — JPR</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Target</p>
                <p className="text-white font-bold uppercase italic text-sm">350 KM Managed</p>
              </div>
            </div>
            <button className="flex items-center gap-4 px-8 py-4 bg-lime-500 text-black font-black uppercase italic tracking-widest text-xs rounded-full hover:bg-white transition-all">
              Expansion Details
              <Navigation size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. PHASE 02: THE HERITAGE LOOPS (Right Side) */}
      <motion.div 
        whileHover={{ flex: 1.2 }}
        className="relative flex-1 bg-white group transition-all duration-700 ease-in-out overflow-hidden"
      >
        {/* Background Texture/Image */}
        <div className="absolute inset-0 opacity-10 grayscale group-hover:scale-110 transition-transform duration-[10s]">
          <img 
            src="https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1000&auto=format&fit=crop" 
            alt="Heritage City" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Phase Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-12 md:p-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-right justify-end md:justify-start">
              <span className="text-slate-400 font-mono text-xs font-black uppercase tracking-[0.4em]">Phase 02</span>
              <div className="h-px w-12 bg-slate-200" />
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              Heritage <br />
              <span className="text-lime-600 not-italic">Loops.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg max-w-md leading-relaxed">
              Silent, zero-vibration transit within Udaipur and Jaisalmer. Protecting the legacy of Rajasthan's heritage zones.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-10">
              <div>
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Focus Zones</p>
                <p className="text-slate-900 font-bold uppercase italic text-sm">UDH & JSL Loops</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Impact</p>
                <p className="text-slate-900 font-bold uppercase italic text-sm">Zero Soot / Quiet</p>
              </div>
            </div>
            <button className="flex items-center gap-4 px-8 py-4 border-2 border-slate-900 text-slate-900 font-black uppercase italic tracking-widest text-xs rounded-full hover:bg-slate-900 hover:text-white transition-all">
              Feasibility Study
              <Compass size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 3. CENTER DIVIDER ICON */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
        <div className="h-20 w-20 bg-lime-500 rounded-full flex items-center justify-center shadow-2xl border-8 border-white group">
          <MapPin size={24} className="text-black group-hover:scale-125 transition-transform" />
        </div>
      </div>

    </section>
  );
};

export default RouteRoadmapSplit;