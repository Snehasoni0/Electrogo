"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Smartphone, BarChart3, ShieldCheck, Activity } from 'lucide-react';

const TechSpecsGrid = () => {
  const specs = [
    {
      title: "Fast Charging",
      metric: "60kW - 120kW",
      desc: "Industrial-grade DC Fast Charging protocols. Optimized for 80% recovery in 45 mins.",
      icon: <Zap size={22} />,
      detail: "Dual-Gun / Simultaneous"
    },
    {
      title: "Universal Support",
      metric: "CCS2 + GB/T",
      desc: "Full-spectrum compatibility for all Indian EV architectures and global standards.",
      icon: <Globe size={22} />,
      detail: "AIS-138 Compliant"
    },
    {
      title: "Smart Network",
      metric: "IoT Enabled",
      desc: "Real-time telemetry, remote cloud booking, and automated digital billing cycles.",
      icon: <Smartphone size={22} />,
      detail: "24/7 Grid Monitor"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center py-12 px-6 md:px-12 overflow-hidden font-sans">
      
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }} />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "3.5rem" }} 
              className="h-1.5 bg-lime-500 mb-6" 
            />
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.85]">
              Technical <br />
              <span className="text-lime-500 not-italic">Architecture.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
             <p className="text-slate-500 text-sm font-medium mt-2 max-w-xs md:text-right">
               High-performance charging hardware engineered for commercial deployment in Rajasthan.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[40px] bg-white border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-lime-500/5 rounded-bl-[100px] group-hover:bg-lime-500/10 transition-colors -z-0" />
              
              <div className="flex justify-between items-start mb-16 relative z-10">
                <div className="p-4 bg-slate-900 text-white group-hover:bg-lime-500 group-hover:text-black rounded-[20px] transition-all shadow-lg">
                  {spec.icon}
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <div className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" />
                  <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Active</span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-slate-900 text-4xl font-black uppercase italic tracking-tighter leading-none">
                  {spec.metric}
                </h3>
                <h4 className="text-lime-600 text-[11px] font-black uppercase tracking-[0.3em] mt-3 mb-6">
                  {spec.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                  {spec.desc}
                </p>
              </div>

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-slate-200" />
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">{spec.detail}</span>
                </div>
                <div className="flex gap-1">
                   <div className="w-1 h-1 bg-slate-200 rounded-full" />
                   <div className="w-4 h-1 bg-lime-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TechSpecsGrid;