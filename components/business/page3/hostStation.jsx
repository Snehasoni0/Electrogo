"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowUpRight, TrendingUp } from 'lucide-react';

const LandownerPitch = () => {
  return (
    <section className="relative w-full bg-gray-950 flex items-center justify-center py-12  px-6 md:px-12 overflow-hidden font-sans">
      
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(163,230,53,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: THE HOOK */}
        <div className="space-y-6">
          <span className="text-lime-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">Strategic Partnership</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
            Host the <br /> 
            <span className="text-lime-500 not-italic">Future.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
            Convert idle parking into a high-yield asset. Attract premium EV travelers to your hotel or mall.
          </p>
        </div>

        {/* RIGHT: CONDENSED REVENUE CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div className="p-3 bg-lime-500 text-black rounded-xl">
              <Wallet size={20} />
            </div>
          </div>

          {/* Core Logic */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-2xl font-black uppercase italic tracking-tight">Passive Income Model</h3>
              <p className="text-slate-500 text-xs mt-2 font-medium">Earn from every unit of power sold on your premises.</p>
            </div>

            {/* Visual Revenue Bar */}
            <div className="space-y-3">
              <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden flex">
                <div className="h-full w-[65%] bg-white/10 border-r border-gray-900" />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-lime-500" 
                />
              </div>
              <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                <span className="text-slate-500">Operation & Tech</span>
                <span className="text-white italic">Your Net Margin</span>
              </div>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-lime-500" />
                <span className="text-[9px] text-slate-300 font-bold uppercase tracking-wider">Zero Upfront Cap-Ex</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-lime-500" />
                <span className="text-[9px] text-slate-300 font-bold uppercase tracking-wider">24/7 Remote Support</span>
              </div>
            </div>

            {/* Action */}
            <button className="w-full group bg-white hover:bg-lime-500 text-black font-black uppercase italic tracking-[0.2em] py-4 rounded-xl transition-all flex items-center justify-center gap-3">
              Get Projections
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LandownerPitch;