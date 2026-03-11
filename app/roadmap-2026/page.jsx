"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Cpu, Rocket, Globe, ShieldCheck } from 'lucide-react';

const RoadmapTimeline = () => {
  const timelineData = [
    {
      quarter: "Q1 2026",
      title: "Network Initiation",
      icon: <Target size={18} />,
      items: ["Highway Mapping", "Portal Launch", "Site Audits"],
      active: true
    },
    {
      quarter: "Q2 2026",
      title: "The April Rollout",
      icon: <Rocket size={18} />,
      items: ["Corridor Live", "B2G Deployment", "Grid Sync"],
      active: false
    },
    {
      quarter: "Q3 2026",
      title: "Regional Expansion",
      icon: <Cpu size={18} />,
      items: ["Udaipur Link", "Fleet AI Alpha", "Solar Hubs"],
      active: false
    }
  ];

  return (
    <section className="bg-white overflow-x-hidden">
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498637841888-108c6b723fcb?w=1200')` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex justify-center items-center gap-3 mb-2 md:mb-4 text-lime-400">
              <Zap size={16} className="fill-lime-400" />
              <span className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Operational Roadmap</span>
            </div>
            <h1 className="text-5xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">
              Strategic <br />
              <span className="text-white outline-text opacity-40">Timeline.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              Rajasthan EV Expansion <br />
              <span className="text-lime-500">Phase II Core.</span>
            </h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-lime-400 pl-6">
              "We are scaling the Jaipur-Ajmer-Jodhpur highway network. Secure your integration into Rajasthan's transit infrastructure ahead of the April 2026 rollout."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex-1">
                <Globe className="text-slate-900 mb-2" size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">State-Wide Grid</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex-1">
                <ShieldCheck className="text-slate-900 mb-2" size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">B2G Verified</span>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[450px] flex items-center justify-center">
            <div className="absolute w-full md:w-[80%] aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 md:border-8 border-white">
              <img src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=800" className="w-full h-full object-cover" alt="EV" />
            </div>
            <div className="absolute w-[80%] aspect-video rounded-[2rem] overflow-hidden shadow-xl -translate-y-12 md:-translate-y-20 -translate-x-5 md:-translate-x-10 rotate-180 opacity-20 grayscale border border-slate-200 hidden md:block">
              <img src="https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=800" className="w-full h-full object-cover" alt="EV Reflected" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-950 py-24">
        <div className="text-center mb-16 md:mb-24 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 bg-lime-400/5 mb-4"
          >
            <Zap size={14} className="text-lime-400 fill-lime-400" />
            <span className="text-lime-400 font-mono text-[10px] font-black uppercase tracking-[0.3em]">Operational Sequence</span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
            Evolution <br />
            <span className="text-transparent outline-text opacity-20">Milestones.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative px-6">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`absolute left-2 md:left-1/2 top-0 md:-translate-x-1/2 w-3 h-3 rounded-full z-20 transition-colors duration-500 ${step.active ? 'bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.5)]' : 'bg-gray-800'}`} />

                <div className="w-full md:w-[45%] ml-12 md:ml-0">
                  <div className={`group p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-700 ${step.active ? 'bg-white border-white text-slate-900 shadow-2xl md:scale-105' : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700'}`}>
                    
                    <div className="flex justify-between items-center mb-6 md:mb-8">
                      <span className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] ${step.active ? 'text-lime-600' : 'text-gray-500'}`}>
                        {step.quarter}
                      </span>
                      <div className={`${step.active ? 'text-slate-900' : 'text-gray-600'}`}>
                        {step.icon}
                      </div>
                    </div>

                    <h3 className={`text-xl md:text-2xl font-black uppercase italic tracking-tighter mb-6 md:mb-8 leading-none ${step.active ? 'text-slate-900' : 'text-white'}`}>
                      {step.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {step.items.map((item, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${step.active
                              ? 'bg-slate-100 text-slate-600 hover:bg-lime-400 hover:text-black'
                              : 'bg-gray-950 text-gray-500 hover:text-lime-400 hover:bg-gray-800'
                            }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #fff;
        }
      `}</style>
    </section>
  );
};

export default RoadmapTimeline;