"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Building2, CloudRain, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const GlobalAlignment = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sdgs = [
    {
      goal: "07",
      title: "Clean Energy",
      subtitle: "Affordable & Clean",
      desc: "Accelerating the transition to renewable infrastructure through integrated solar charging networks.",
      icon: <Sun className="text-amber-500" size={32} />,
      color: "bg-amber-50",
      border: "border-amber-200"
    },
    {
      goal: "11",
      title: "Sustainable Cities",
      subtitle: "Cities & Communities",
      desc: "Reducing urban congestion and noise pollution through silent, zero-emission heritage loops.",
      icon: <Building2 className="text-orange-500" size={32} />,
      color: "bg-orange-50",
      border: "border-orange-200"
    },
    {
      goal: "13",
      title: "Climate Action",
      subtitle: "Urgent Response",
      desc: "Directly offsetting 4.6 metric tons of CO2 per vehicle annually to combat global warming.",
      icon: <CloudRain className="text-emerald-600" size={32} />,
      color: "bg-emerald-50",
      border: "border-emerald-200"
    }
  ];

  return (
    <section className="relative min-h-[70vh] w-full bg-white py-24 px-8 md:px-24 overflow-hidden font-sans flex items-center">
      
      {/* 1. BACKGROUND DECOR (Global Grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Globe size={16} className="text-slate-300 animate-pulse" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">UN Alignment Framework</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              Commitment to <br />
              <span className="text-lime-400 not-italic">Global Goals.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-medium text-sm md:text-base max-w-[380px] leading-relaxed border-l border-lime-300 pl-6">
            Electrogo Mobility operations are strictly aligned with the <span className="text-slate-900 font-bold">United Nations SDGs</span> for 2030.
          </p>
        </div>

        {/* KINETIC SDG CARDS */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[450px]">
          {sdgs.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ 
                flex: hoveredIndex === i ? 2 : 1,
                filter: hoveredIndex !== null && hoveredIndex !== i ? "blur(2px) grayscale(0.5)" : "blur(0px) grayscale(0)"
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-[40px] border border-slate-100 p-10 cursor-pointer flex flex-col justify-between transition-all group ${hoveredIndex === i ? 'bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]' : 'bg-slate-50'}`}
            >
              {/* Goal Number Background */}
              <div className="absolute -right-4 -top-4 text-[120px] font-black text-slate-200/20 italic select-none group-hover:text-lime-500/10 transition-colors">
                {item.goal}
              </div>

              {/* Icon & Status */}
              <div className="relative z-10 flex justify-between items-start">
                <div className={`p-5 rounded-3xl bg-white shadow-sm border ${item.border} group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-md border border-slate-100 rounded-full">
                  <CheckCircle2 size={10} className="text-lime-500" />
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none italic">Verified Impact</span>
                </div>
              </div>

              {/* Content Block */}
              <div className="relative z-10 mt-12 md:mt-0">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Goal {item.goal}</h4>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-4 transition-colors group-hover:text-slate-950">
                  {item.title}
                </h3>
                
                {/* Expandable Text on Hover */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIndex === i ? "auto" : 0, 
                    opacity: hoveredIndex === i ? 1 : 0 
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mb-6">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-lime-600 font-black uppercase text-[10px] tracking-widest italic group">
                    View Strategy Paper <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Static Placeholder for non-hovered state */}
                <motion.p 
                  animate={{ opacity: hoveredIndex === i ? 0 : 1 }}
                  className="text-slate-400 font-bold text-[10px] uppercase tracking-widest italic"
                >
                  {item.subtitle}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalAlignment;