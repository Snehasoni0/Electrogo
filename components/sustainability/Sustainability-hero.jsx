"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Clock4 } from 'lucide-react';

const ImpactHeroSplit = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + (Math.random() * 0.005 + 0.005));
    }, 50); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen md:h-screen w-full bg-[#050609] flex items-center justify-center overflow-hidden font-sans py-20 md:py-0">

      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306842/photo-1675116731363-c17d957f3444_bympdv.jpg"
          alt="Jodhpur Cityscape Aerial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#050609]/95 via-[#050609]/80 to-[#050609]/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,_rgba(163,230,53,0.15),transparent_60%)]" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center px-6 md:px-12 py-12 md:py-24">

        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-10 order-1">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] md:leading-[0.85]"
          >
            Moving Rajasthan <br />
            Toward a <br />
            <span className="text-lime-500 not-italic">Net-Zero</span> Future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 font-medium text-base md:text-xl max-w-2xl leading-relaxed"
          >
            We don't just measure kilometers; <span className="text-white font-bold italic underline decoration-lime-500 decoration-2 underline-offset-4">we measure the air we save.</span> By April 2026, Electrogo will initiate the state's largest transition from fossil fuels to clean energy.
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
            className="relative px-8 py-10 md:px-16 md:py-16 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] md:rounded-[48px] shadow-[0_0_120px_rgba(163,230,53,0.1)] group overflow-hidden w-full max-w-sm md:max-w-none"
          >

            <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2">
              <Clock4 size={14} className="text-lime-600 animate-spin-slow" />
              <span className="text-[9px] font-mono font-black text-lime-500 uppercase tracking-widest">Live Ticker</span>
            </div>

            <div className="mt-4 md:mt-8 flex items-baseline gap-2 md:gap-6 justify-center">
              <span className="text-5xl md:text-[100px] font-black text-white italic tracking-tighter tabular-nums leading-none">
                {count.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-xl md:text-5xl font-black text-lime-500 uppercase italic">Tons</span>
            </div>
            
            <div className='flex flex-col items-center'>
              <p className="mt-6 md:mt-8 text-center text-slate-400 font-mono text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
                Carbon Emissions Prevented <br className="md:hidden" /> 
              </p>
              <div className='h-0.5 w-16 md:w-20 bg-lime-400 mt-4'></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity">
        <p className="text-[9px] font-mono text-white uppercase tracking-[0.5em]">Impact Tiers</p>
        <div className="w-10 h-1 border border-white/20 rounded-full overflow-hidden">
          <motion.div initial={{ x: -40 }} animate={{ x: 40 }} transition={{ repeat: Infinity, duration: 2 }} className="w-full h-full bg-lime-500" />
        </div>
      </div>

    </section>
  );
};

export default ImpactHeroSplit;