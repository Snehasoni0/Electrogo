"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MapPin, Activity, GaugeCircle, ArrowRight } from 'lucide-react';

const ExpansionRoadmap = () => {
  const points = [
    {
      id: "01",
      name: "Jaipur",
      metric: "State Capital Hub",
      status: "Operational",
      icon: <Zap size={18} />,
      // Shifting Jaipur down on mobile to clear the header
      y: "md:top-[15%] top-[22%]", 
      x: "md:left-[5%] left-[5%]",
    },
    {
      id: "02",
      name: "Ajmer",
      metric: "Central Transit Node",
      status: "Active Grid",
      icon: <Activity size={18} />,
      y: "md:top-[55%] top-[48%]",
      x: "md:left-[40%] left-[5%]",
    },
    {
      id: "03",
      name: "Jodhpur",
      metric: "Network Command Core",
      status: "Operational",
      icon: <GaugeCircle size={18} />,
      y: "md:top-[15%] top-[74%]",
      x: "md:left-[72%] left-[5%]",
    }
  ];

  return (
    <section className="relative h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden font-sans">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-400 via-lime-50 to-white opacity-40" />
        <img 
          src="https://images.unsplash.com/photo-1657486232260-8be85026c8e0?w=1200" 
          alt="Aerial Highway Infrastructure"
          className="w-full h-full object-cover opacity-[0.05] grayscale"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* 2. SECTION HEADER */}
      <div className="absolute top-8 md:top-12 z-30 text-center px-6 pointer-events-none">
        <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "3.5rem" }} 
            className="h-1 bg-slate-900 mx-auto mb-4" 
        />
        <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
          The Electric <br />
          <span className="text-lime-600 not-italic">Corridor.</span>
        </h2>
        <p className="mt-2 md:mt-4 text-slate-500 font-mono text-[9px] uppercase tracking-[0.3em]">
          Strategic Grid Expansion: Phase 1
        </p>
      </div>

      {/* 3. THE LINE (Wavy for Desktop, Straight for Mobile) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1440 800" 
          fill="none" 
          preserveAspectRatio="none"
        >
          {/* Desktop Wavy Path */}
          <motion.path
            d="M 0 300 C 200 300 400 700 720 500 C 1040 300 1240 700 1440 300"
            className="hidden md:block"
            stroke="#166534"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
          {/* Mobile Straight Vertical Path */}
          <motion.line
            x1="12%" y1="20%" x2="12%" y2="90%"
            className="block md:hidden"
            stroke="#166534"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      </div>

      {/* 4. TACTICAL HUB NODES */}
      <div className="relative w-full h-full max-w-[1600px] mx-auto z-20">
        {points.map((point, i) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.15) }}
            className={`absolute ${point.y} ${point.x} w-[90%] md:w-[320px]`}
          >
            <div className="bg-white/95 backdrop-blur-md border border-slate-100 p-4 md:p-6 rounded-[24px] md:rounded-[32px] shadow-xl transition-all duration-500 group">
              
              <div className="flex justify-between items-start mb-3 md:mb-6 relative">
                <div className="p-2 md:p-3 bg-slate-900 text-lime-500 rounded-lg md:rounded-xl shadow-lg group-hover:bg-lime-500 group-hover:text-black transition-colors">
                  {point.icon}
                </div>
                <div className="flex items-center gap-2 bg-lime-50 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-lime-100">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-lime-500 rounded-full animate-pulse" />
                  <span className="text-[8px] md:text-[9px] text-lime-700 font-black uppercase tracking-widest">{point.status}</span>
                </div>
              </div>

              <div className="mb-3 md:mb-6">
                <h3 className="text-slate-900 text-xl md:text-3xl font-black uppercase italic tracking-tighter leading-none">
                  {point.name}
                </h3>
                <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-1 md:mt-2">
                  {point.metric}
                </p>
              </div>

              <div className="pt-3 md:pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <MapPin size={10} />
                  <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest">Grid Alpha</span>
                </div>
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-lime-500 transition-colors">
                  <ArrowRight size={10} className="text-slate-400 group-hover:text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExpansionRoadmap;