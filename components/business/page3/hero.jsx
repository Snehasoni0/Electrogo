"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Map, ArrowRight } from 'lucide-react';

const InfraHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0d1117]">

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1620002093398-8f16081af5ee?w=1600&auto=format&fit=crop&q=80"
          alt="High-Speed EV Charging Hub"
          className="w-full h-full object-cover grayscale brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/90 via-transparent to-[#0d1117]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.8]"
        >
          Powering the <br />
          Heart of India’s <br />
          <span className="text-lime-500 not-italic">Heritage.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          A dense network of high-speed charging hubs connecting
          <span className="text-white"> Rajasthan’s highways </span> and
          <span className="text-white"> urban centers.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <button className="group cursor-pointer relative px-10 py-5 bg-lime-500 text-black font-black uppercase italic tracking-widest text-xs rounded-2xl transition-all hover:bg-lime-400 hover:shadow-[0_0_50px_rgba(163,230,53,0.3)] flex items-center gap-3">
            Host a Station
            <Zap size={18} className="fill-black group-hover:animate-pulse" />
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/20 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Infrastructure Grid</span>
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </motion.div>


      {/* Decorative Technical Borders */}
      <div className="absolute top-10 left-10 w-24 h-24 border-l-2 border-t-2 border-white/5 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 border-white/5 pointer-events-none" />

      <style jsx>{`
        h1 {
          filter: drop-shadow(0 0 30px rgba(0,0,0,0.5));
        }
      `}</style>
    </section>
  );
};

export default InfraHero;