"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Landmark, TrendingUp, ArrowRight } from 'lucide-react';

const SustainabilityFlow = () => {
  const pillars = [
    {
      title: "Environmental",
      sub: "The Air",
      desc: "Every Electrogo EV eliminates 4.6 metric tons of CO2 annually compared to petrol vehicles.",
      icon: <Wind size={20} />,
      metric: "4.6MT Saved"
    },
    {
      title: "Economic",
      sub: "The Growth",
      desc: "Our hubs are creating 500+ 'Green-Collar' jobs for Rajasthan’s local youth.",
      icon: <TrendingUp size={20} />,
      metric: "500+ Jobs"
    },
    {
      title: "Social",
      sub: "The Heritage",
      desc: "Silent, vibration-free transit protects the structural integrity of Rajasthan’s historic forts.",
      icon: <Landmark size={20} />,
      metric: "Zero Soot"
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 px-8 md:px-24 font-sans overflow-hidden border-b border-slate-100">

      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: "3rem" }}
          className="h-1 bg-lime-500 mb-6"
        />
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
          The Three <br />
          <span className="text-lime-300 not-italic">Pillars.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-start">

        <div className="lg:col-span-2 flex justify-start lg:justify-start pt-0 md:pt-4">
          <h3 className="
    /* Mobile: Horizontal, Top Border */
    text-slate-300 font-black uppercase tracking-[0.4em] text-[10px] md:text-sm 
    border-t border-slate-100 pt-4 w-full mb-8
    
    /* Desktop: Vertical, Left Border */
    lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 lg:mb-0 lg:w-fit
    lg:[writing-mode:vertical-lr] lg:rotate-180 lg:h-fit
  ">
            Strategic Impact <br className="hidden lg:block" />
            <span className="text-lime-500">Framework</span> 2026
          </h3>
        </div>

        <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          <div className="absolute -top-12 left-0 w-full hidden md:block opacity-20">
            <svg width="100%" height="40" viewBox="0 0 800 40" fill="none">
              <path d="M10 10 Q 130 10, 130 40" stroke="#84cc16" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M400 0 L 400 40" stroke="#84cc16" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M790 10 Q 670 10, 670 40" stroke="#84cc16" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {pillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >

              <div className="p-8 bg-slate-50 border border-slate-100 rounded-[32px] hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-slate-900 group-hover:bg-lime-500 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-mono font-black text-slate-300 uppercase tracking-widest italic">
                      Metric Sync
                    </span>
                  </div>

                  <h4 className="text-[10px] font-black text-lime-600 uppercase tracking-widest mb-2">
                    {item.title}
                  </h4>
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-4 leading-none">
                    {item.sub}
                  </h3>
                  <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-1 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                    {item.metric}
                  </span>
                  <div className="h-1.5 w-1.5 bg-lime-500 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SustainabilityFlow;