"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardEdit, SearchCode, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const PartnershipRoadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      title: "Expression of Interest",
      desc: "Fill out our 2-minute partnership form to initiate the sequence.",
      icon: <ClipboardEdit className="w-6 h-6" />,
      tag: "PHASE 01",
      details: "Minimal friction intake for Rajasthan grid integration."
    },
    {
      title: "Feasibility & Audit",
      desc: "Our team conducts a tech and site audit within 48 hours.",
      icon: <SearchCode className="w-6 h-6" />,
      tag: "PHASE 02",
      details: "Protocol compliance check for Electric Corridor expansion."
    },
    {
      title: "Onboarding",
      desc: "Secure your contract and get ready for the April 2026 rollout.",
      icon: <Rocket className="w-6 h-6" />,
      tag: "PHASE 03",
      details: "Final synchronization with executive transit systems."
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#FDFDFD] py-24 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-12 bg-lime-600" />
          <span className="text-lime-600 font-mono text-xs font-black uppercase tracking-[0.3em]">Expansion Protocol</span>
        </motion.div>
        <h2 className="text-6xl md:text-8xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.85] mb-4">
          Partnership <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-lime-400">Roadmap.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="hidden md:grid grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 mb-12">
                <motion.div 
                  className="h-full bg-lime-600"
                  initial={{ width: 0 }}
                  animate={{ width: activeIndex >= i ? "100%" : "0%" }}
                />
              </div>

              <div className="pt-12">
                <div className={`mb-6 text-xs font-black tracking-widest transition-colors ${activeIndex === i ? 'text-lime-600' : 'text-slate-300'}`}>
                  {step.tag}
                </div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-xl ${activeIndex === i ? 'bg-lime-600 text-white rotate-12 scale-110' : 'bg-white text-slate-400 border border-slate-100'}`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-4 group-hover:text-lime-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                  {step.desc}
                </p>
                
                <AnimatePresence mode="wait">
                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-[10px] font-bold text-lime-600 uppercase tracking-widest flex items-center gap-2"
                    >
                      <CheckCircle2 size={12} /> {step.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-lime-600 text-white flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                {i !== steps.length - 1 && <div className="w-px h-full bg-slate-100 my-2" />}
              </div>
              <div className="pb-8">
                <div className="text-[10px] font-black text-lime-600 mb-1">{step.tag}</div>
                <h4 className="text-xl font-black text-slate-900 uppercase italic mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 mt-2 border-t border-slate-100 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-md">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Deployment Readiness
          </p>
          <p className="text-slate-600 text-xs font-bold leading-relaxed">
            Synchronizing Rajasthan's Electric Corridor for the April 2026 rollout. Ensuring every partner hub meets state-wide charging grid standards.
          </p>
        </div>
        <button className="group flex items-center gap-4 px-10 py-5 bg-slate-950 text-white font-black uppercase tracking-widest text-xs italic rounded-full hover:bg-lime-600 transition-all shadow-2xl">
          Initiate Partnership <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default PartnershipRoadmap;