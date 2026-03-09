"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Clock4 } from 'lucide-react';

const ImpactHeroSplit = () => {
  const [count, setCount] = useState(0);

  // High-performance JavaScript Simulation of real-time CO2 offset
  useEffect(() => {
    const interval = setInterval(() => {
      // Small randomized increments make the ticker feel 'live'
      setCount((prev) => prev + (Math.random() * 0.005 + 0.005));
    }, 50); // Faster update for dramatic effect
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-[#050609] flex items-center justify-center overflow-hidden font-sans">

      {/* 1. BACKGROUND INFRASTRUCTURE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          // HIGH-QUALITY UNSPLASH JODHPUR IMAGE
          src="https://images.unsplash.com/photo-1675116731363-c17d957f3444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzdGFpbmFiaWxpdHl8ZW58MHx8MHx8fDA%3D"
          alt="Jodhpur Cityscape Aerial"
          className="w-full h-full object-cover"
        />
        {/* Deep Wash Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050609]/95 via-[#050609]/80 to-[#050609]/60 backdrop-blur-[1px]" />

        {/* Subtle Neon Radial Glow (Right Side only) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,_rgba(163,230,53,0.15),transparent_60%)]" />
      </div>

      {/* 2. SPLIT-SCREEN CONTENT LAYER */}
      <div className="relative z-10 h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 md:px-12 py-24">

        {/* LEFT SIDE: Authoritative Copy (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full space-y-10 order-2 lg:order-1">

          {/* H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.85]"
          >
            Moving Rajasthan <br />
            Toward a <br />
            <span className="text-lime-500 not-italic">Net-Zero</span> Future.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            We don't just measure kilometers; <span className="text-white font-bold italic underline decoration-lime-500 decoration-2 underline-offset-4">we measure the air we save.</span> By April 2026, Electrogo will initiate the state's largest transition from fossil fuels to clean energy.
          </motion.p>
        </div>

        {/* RIGHT SIDE: Live Ticker Runner (5 Columns) */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end h-full order-1 lg:order-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: 30 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
            // The Neon Floating Pod Design
            className="relative px-12 py-12 md:px-16 md:py-16 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[48px] shadow-[0_0_120px_rgba(163,230,53,0.1)] group overflow-hidden"
          >

            {/* Pulsing Status Corner */}
            <div className="absolute top-8 right-8 flex items-center gap-2">
              <Clock4 size={14} className="text-lime-600 animate-spin-slow" />

              <span className="text-[9px] font-mono font-black text-lime-500 uppercase tracking-widest">Live Ticker</span>
            </div>

            {/* The Main Ticker Display */}
            <div className="mt-8 flex items-baseline gap-4 md:gap-6 justify-center">
              <span className="text-6xl md:text-[100px] font-black text-white italic tracking-tighter tabular-nums leading-none">
                {count.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-2xl md:text-5xl font-black text-lime-500 uppercase italic">Tons</span>
            </div>
            <div className='flex flex-col items-center'>
              <p className="mt-8 text-center text-slate-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                Carbon Emissions Prevented // projected offset 2026
              </p>
              <div className='h-0.5 w-20 bg-lime-400 mt-4'></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. SCROLL CUE (Bottom Center) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[9px] font-mono text-white uppercase tracking-[0.5em]">Impact Tiers</p>
        <div className="w-10 h-1 border border-white/20 rounded-full overflow-hidden">
          <motion.div initial={{ x: -40 }} animate={{ x: 40 }} transition={{ repeat: Infinity, duration: 2 }} className="w-full h-full bg-lime-500" />
        </div>
      </div>

    </section>
  );
};

export default ImpactHeroSplit;