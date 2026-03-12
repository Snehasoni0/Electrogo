"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const PartnerHero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('partnership-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#050609] flex items-center overflow-hidden font-sans">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dxaj4o4xh/image/upload/v1773306909/photo-1672380135241-c024f7fbfa13_mwpoox.jpg" 
          alt="EV Charging Infrastructure Rajasthan"
          className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050609] via-[#050609]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-16 items-center mt-24">
        
        <div className="lg:col-span-7 space-y-3 md:space-y-8 ">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.85]"
          >
            Powering Rajasthan’s <br />
            <span className="text-lime-500 not-italic">Future, Together.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 font-medium text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Join the largest EV ecosystem in North India. Whether you own land, manage a fleet, or want to lead a green revolution, <span className="text-white italic underline decoration-lime-500 underline-offset-8">there is a place for you at Electrogo.</span>
          </motion.p>

          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-lime-500 px-8 py-5 rounded-2xl text-black font-black uppercase italic tracking-widest text-sm transition-all shadow-[0_20px_40px_-10px_rgba(163,230,53,0.3)]"
          >
            Quick Inquiry
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[48px] shadow-2xl overflow-hidden group hover:border-lime-500/30 transition-colors"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-lime-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10 space-y-10">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-lime-500 text-black rounded-2xl">
                  <TrendingUp size={28} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Est. Asset Yield</p>
                  <p className="text-2xl font-black text-white italic">+18.5%</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-slate-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">Partnership ROI Potential</h3>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-lime-500" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-white/5 rounded-3xl border border-white/5">
                   <Zap size={16} className="text-lime-500 mb-2" />
                   <p className="text-white font-bold text-sm">24/7 Grid</p>
                   <p className="text-slate-500 text-[10px] uppercase">Uptime</p>
                </div>
                <div className="p-5 bg-white/5 rounded-3xl border border-white/5">
                   <ShieldCheck size={16} className="text-lime-500 mb-2" />
                   <p className="text-white font-bold text-sm">Passive</p>
                   <p className="text-slate-500 text-[10px] uppercase">Revenue</p>
                </div>
              </div>

              <p className="text-[10px] text-center text-slate-600 font-mono uppercase tracking-widest">
                Data projected for FY 2026-27 Expansion
              </p>
            </div>
          </motion.div>
          
          <div className="absolute -bottom-6 -left-6 bg-lime-500/20 backdrop-blur-md border border-lime-500/30 px-6 py-3 rounded-full hidden lg:block">
            <span className="text-[10px] font-black text-lime-500 uppercase tracking-widest">Jodhpur Hub Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;