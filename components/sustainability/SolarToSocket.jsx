"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, BatteryCharging, Zap } from 'lucide-react';

const SolarToSocket = () => {
  return (
    <section className="relative min-h-[80vh] w-full bg-gray-950 py-24 px-8 md:px-24 overflow-hidden font-sans flex items-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT: CONTENT NARRATIVE (order-1 on mobile) */}
        <div className="order-1 lg:order-2 space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4">
            <div className="h-px w-12 bg-lime-500" />
            <span className="text-lime-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">Energy Sovereignty</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
            Rajasthan’s Sun, <br />
            <span className="text-lime-500 not-italic">Powering Wheels.</span>
          </h2>

          <p className="text-slate-400 font-medium text-base md:text-lg leading-relaxed max-w-lg">
            We are not just using the grid. By Phase 2 (2027), <span className="text-white font-bold italic">40% of our infrastructure</span> will be integrated with On-site Solar Canopies.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Target Efficiency</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-white italic">40%</span>
                <span className="text-[9px] text-lime-500 font-bold uppercase tracking-widest bg-lime-500/10 px-2 py-0.5 rounded-full">Solar</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Network Status</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-white italic">2027</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-full">Phase 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: SCHEMATIC (order-2 on mobile) */}
        <div className="order-2 lg:order-1 relative flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-lime-500/30 blur-2xl"
            />
          </div>

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-12 rounded-[48px] md:rounded-[60px] w-full max-w-md">
            <div className="flex flex-col items-center gap-8 md:gap-12">
              {/* SUN */}
              <motion.div whileHover={{ rotate: 90 }} className="p-5 md:p-6 bg-lime-500 text-black rounded-[20px] shadow-[0_0_40px_rgba(163,230,53,0.4)]">
                <Sun size={40} strokeWidth={2.5} className="md:w-[48px] md:h-[48px]" />
              </motion.div>

              {/* CONNECTOR */}
              <div className="relative h-20 md:h-24 w-px bg-white/10">
                <motion.div animate={{ top: ["0%", "100%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-lime-500 rounded-full shadow-[0_0_10px_#84cc16]"
                />
              </div>

              {/* CHARGING STATION */}
              <div className="p-6 md:p-8 bg-slate-900 border border-white/10 rounded-[24px] w-full flex items-center justify-between group">
                <div className="space-y-1">
                  <p className="text-[7px] font-mono font-black text-slate-500 uppercase tracking-widest">Load Verification</p>
                  <p className="text-sm md:text-lg font-black text-white uppercase italic tracking-tighter">Solar Canopy</p>
                </div>
                <div className="p-3 md:p-4 bg-white/5 text-lime-500 rounded-xl group-hover:bg-lime-500 group-hover:text-black transition-all">
                  <BatteryCharging size={24} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <div className="flex items-center gap-4 opacity-40">
                <Zap size={14} className="text-lime-500" />
                <span className="text-[8px] md:text-[10px] font-mono text-slate-400 uppercase tracking-[0.4em]">Grid-Independent Flow</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolarToSocket;