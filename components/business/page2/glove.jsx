"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Radio, FileCheck, ArrowRight } from 'lucide-react';

const WhiteGlovePath = () => {
  const points = [
    {
      id: "01",
      title: "Verified Chauffeurs",
      desc: "Background-checked, protocol-trained professional drivers.",
      icon: <Shield size={18} />,
      desktopPos: "md:top-[60%] md:left-[10%]",
      align: "items-start text-left"
    },
    {
      id: "02",
      title: "Fleet Security",
      desc: "24/7 command center monitoring with real-time GPS telemetry.",
      icon: <Radio size={18} />,
      desktopPos: "md:top-[45%] md:left-[45%]",
      align: "md:items-center md:text-center items-end text-right"
    },
    {
      id: "03",
      title: "Compliance",
      desc: "Full adherence to GeM and state procurement norms.",
      icon: <FileCheck size={18} />,
      desktopPos: "md:top-[25%] md:left-[78%]",
      align: "md:items-start md:text-left items-start text-left"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-white py-16 md:py-24 px-6 md:px-10 overflow-hidden font-sans">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-xl relative z-20 mb-16 md:mb-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-lime-600 font-mono text-[10px] font-black uppercase tracking-[0.4em] mb-4"
        >
          <span className="w-8 h-px bg-lime-500" />
          Protocol Standards
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.9]">
          The "White Glove" <br /> 
          <span className="text-lime-500 not-italic">Standard.</span>
        </h2>
        
        <p className="mt-6 text-slate-500 text-sm max-w-sm leading-relaxed font-medium">
          Establishing prestige and security for Rajasthan's official procurement through 
          rigorous protocol and real-time monitoring.
        </p>
      </div>

      {/* 2. THE PATH (Dashed Line) - Visible only on Desktop to prevent mobile clutter */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <motion.path
            d="M 100 600 Q 300 800 500 600 T 900 400 T 1300 200"
            stroke="#84cc16" // Lime-500
            strokeWidth="3"
            strokeDasharray="15 15"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* 3. RESPONSIVE CONTAINER */}
      <div className="relative md:absolute md:inset-0 flex flex-col md:block gap-10 z-20">
        {points.map((point, i) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`md:absolute ${point.desktopPos} flex flex-col ${point.align} w-full md:max-w-[280px] group`}
          >
            {/* Styled Node */}
            <div className="relative mb-4 md:mb-6">
              <div className="w-6 h-6 bg-white rounded-full border-4 border-lime-500 shadow-xl z-10 relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-lime-500 rounded-full" />
              </div>
              <div className="absolute inset-0 w-6 h-6 bg-lime-100 rounded-full animate-ping opacity-40" />
            </div>
            
            {/* Card Content */}
            <div className="w-full p-6 rounded-2xl bg-slate-50/90 backdrop-blur-md border border-slate-100 group-hover:border-lime-300 group-hover:bg-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
               <div className={`flex items-center gap-3 mb-4 ${point.align.includes('end') ? 'flex-row-reverse' : ''}`}>
                  <div className="p-2 bg-lime-50 text-lime-600 rounded-lg shrink-0 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                    {point.icon}
                  </div>
                  <h4 className="text-[13px] font-black text-slate-900 uppercase italic tracking-widest">
                    {point.title}
                  </h4>
               </div>
               <p className="text-[11px] text-slate-500 leading-relaxed font-semibold uppercase tracking-tight">
                  {point.desc}
               </p>
               
               {/* Decorative Data Bits */}
               <div className={`mt-5 flex gap-1 opacity-30 ${point.align.includes('center') ? 'justify-center' : point.align.includes('end') ? 'justify-end' : ''}`}>
                  <div className="h-1 w-8 bg-lime-500 rounded-full" />
                  <div className="h-1 w-2 bg-slate-400 rounded-full" />
                  <div className="h-1 w-2 bg-slate-400 rounded-full" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        section {
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default WhiteGlovePath;