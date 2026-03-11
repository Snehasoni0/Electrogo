"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, Wifi, Radio, Cpu, Smartphone, Info, Bus } from 'lucide-react';

const FleetFeaturesXray = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Universal Access",
      metric: "Low-Floor Architecture",
      desc: "Precision-engineered zero-step entry for inclusive urban mobility. Optimized for rapid passenger turnover and ADA compliance.",
      icon: <Accessibility size={20} />,
      tag: "Hardware",
      detail: "Ramp Deployment: < 5sec"
    },
    {
      title: "Digital Hub",
      metric: "5G Mesh + Charging",
      desc: "Every bus acts as a moving 5G node. Seat-back USB 3.0 ports ensure the city's workforce stays connected and powered.",
      icon: <Wifi size={20} />,
      tag: "Network",
      detail: "1.2 Gbps Bandwidth"
    },
    {
      title: "Active Sync",
      metric: "Electrogo Ecosystem",
      desc: "Predictive 'Next-Stop' telemetry. Announcements are hardware-synced to the commuter's app for sub-second accuracy.",
      icon: <Radio size={20} />,
      tag: "Software",
      detail: "Sync Latency: < 100ms"
    }
  ];

  return (
    <section className="relative min-h-screen lg:h-screen w-full bg-gray-950 flex flex-col lg:flex-row items-center justify-center py-24 px-6 md:px-12 overflow-hidden font-sans">
      
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-20 flex items-center gap-4">
        <div className="h-8 md:h-10 w-px bg-lime-500" />
        <div>
          <p className="text-white font-black uppercase italic tracking-widest text-base md:text-lg leading-none">Fleet Specs</p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12 lg:mt-0">

        <div className="lg:col-span-5 space-y-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveTab(i)} 
              onMouseEnter={() => setActiveTab(i)}
              className={`cursor-pointer p-6 rounded-[24px] border transition-all duration-300 ${
                activeTab === i 
                ? 'bg-lime-500 border-lime-500 shadow-[0_0_40px_rgba(163,230,53,0.2)]' 
                : 'bg-white/5 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-center gap-5">
                <div className={`p-3 rounded-xl ${activeTab === i ? 'bg-black text-lime-500' : 'bg-slate-900 text-slate-400'}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`text-sm font-black uppercase italic tracking-wider ${activeTab === i ? 'text-black' : 'text-white'}`}>
                    {item.metric}
                  </h3>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === i ? 'text-black/60' : 'text-slate-500'}`}>
                    {item.tag}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-7 relative bg-[#0d1117] border border-white/5 rounded-[32px] md:rounded-[48px] p-8 md:p-16 min-h-[400px] lg:h-[500px] flex flex-col justify-center overflow-hidden">
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <div className="inline-block p-4 bg-lime-500/10 rounded-2xl mb-6 md:mb-8">
                <Cpu size={32} className="text-lime-500" />
              </div>
              
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                {features[activeTab].title}
              </h2>
              
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-8 md:mb-10">
                {features[activeTab].desc}
              </p>

              <div className="flex flex-wrap items-center gap-6 md:gap-8 border-t border-white/5 pt-8">
                <div>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Status</p>
                  <p className="text-xs text-lime-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" />
                    Verified
                  </p>
                </div>
                <div className="hidden md:block w-px h-8 bg-white/10" />
                <div>
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Performance</p>
                  <p className="text-xs text-white font-bold uppercase tracking-widest italic">{features[activeTab].detail}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -right-10 -bottom-10 md:-right-20 md:-bottom-20 opacity-10 pointer-events-none">
             <Bus size={300} className="md:w-[400px] text-white rotate-[-15deg]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetFeaturesXray;