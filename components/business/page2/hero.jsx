"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

const GovtExecutiveHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0d1117]">
      
      {/* 1. BACKGROUND IMAGE WITH COMMAND OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1642665057087-8d12575e0a00?w=1200&auto=format&fit=crop&q=80" 
          alt="Government Protocol EV"
          className="w-full h-full object-cover grayscale brightness-[0.25]"
        />
        {/* Tactical UI Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/90 via-transparent to-[#0d1117]" />
      </div>

      {/* 2. MAIN CONTENT HUB */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Official Badge Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 justify-center mb-6 text-lime-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]"
        >
          <ShieldCheck size={14} />
          <span>B2G Protocol Division</span>
        </motion.div>

        {/* H1: Premium Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.85]"
        >
          Protocol-Compliant, <br />
          <span className="text-transparent stroke-text">Secure,</span> & <span className="text-lime-500">Official</span> <br />
          Mobility.
        </motion.h1>

        {/* Sub-text: Geographic & Tier Target */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-slate-400 font-medium text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Premium EV sedans tailored for the needs of Rajasthan’s <br />
          <span className="text-white font-bold italic">Administrative Officers • State Guests • Official Delegations.</span>
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <button className="group cursor-pointer relative px-8 py-5 bg-lime-500 text-black font-black uppercase italic tracking-widest text-xs rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(163,230,53,0.4)] flex items-center gap-3">
            Request Procurement Kit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="text-slate-500 font-black uppercase italic tracking-widest text-[10px] border-b border-slate-800 pb-1 hover:text-white hover:border-lime-500 transition-all">
            Compliance & GeM Docs
          </button>
        </motion.div>
      </div>

      {/* 3. JUMPING SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/20 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Governance Standards</span>
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </motion.div>

      {/* Modern UI Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0d1117] to-transparent z-[5]" />
      
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </section>
  );
};

export default GovtExecutiveHero;